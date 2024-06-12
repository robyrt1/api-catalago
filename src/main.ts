import { NestFactory } from '@nestjs/core';
import { AppModule } from './infrastructure/ioc/app.module';

import helmet from 'helmet';

import { SharedServicesIocIdentifiers } from '@infrastructure/ioc/shared/shared.services.ioc.identifiers';
import { EnvironmentSharedService } from '@domain/shared/services/environment.shared.service';
import { CustomLoggerSharedService } from '@domain/shared/services/custom.logger.shared.service';
import { SwaggerApiDocumentation } from '@infrastructure/rest/doc/swaggert.api.documentation';
import { INestApplication } from '@nestjs/common';

import { Cluster } from '@infrastructure/configs/cluster/server.cluster';

import * as process from 'node:process';

const processId = process.pid;
let server: INestApplication;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  server = app;
  app.enableCors();
  app.use(helmet());

  const environmentSharedService: EnvironmentSharedService = app.get(
    SharedServicesIocIdentifiers.ENVIROMMENT,
  );
  const logger: CustomLoggerSharedService = app.get(
    SharedServicesIocIdentifiers.CUSTOM_LOGGER,
  );

  const environment = environmentSharedService.getEnv('NODE_ENV');
  const serverPort = environmentSharedService.getEnv('SERVER_PORT');

  if (environment !== 'production') {
    const swaggerApiDocumentation: SwaggerApiDocumentation = app.get(
      SwaggerApiDocumentation,
    );
    swaggerApiDocumentation.setup(app, environmentSharedService);
  }

  await app.listen(environmentSharedService.getEnv('SERVER_PORT'), () => {
    logger.log(
      `API running in '${environment}' environment and process ${processId}`,
      'AppConfiguration',
    );
    logger.log(`API running on port ${serverPort}`, 'AppConfiguration');
  });
}

process.on('SIGTERM', () => {
  console.log('server ending!', new Date().toISOString());
  server.close().then(() => process.exit());
});

Cluster.clusterize(bootstrap);
