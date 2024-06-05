import { NestFactory } from '@nestjs/core';
import { AppModule } from './infrastructure/ioc/app.module';

import helmet from 'helmet';

import { SharedServicesIocIdentifiers } from '@infrastructure/ioc/shared/shared.services.ioc.identifiers';
import { EnvironmentSharedService } from '@domain/shared/services/environment.shared.service';
import { CustomLoggerSharedService } from '@domain/shared/services/custom.logger.shared.service';
import { SwaggerApiDocumentation } from '@infrastructure/rest/doc/swaggert.api.documentation';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
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
      `API running in '${environment}' environment`,
      'AppConfiguration',
    );
    logger.log(`API running on port ${serverPort}`, 'AppConfiguration');
  });
}
bootstrap();
