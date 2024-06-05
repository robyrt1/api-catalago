import { EnvironmentSharedService } from '@domain/shared/services/environment.shared.service';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import * as fs from 'fs';
import * as path from 'path';

export class SwaggerApiDocumentation {
  setup(
    app: INestApplication,
    environmentSharedService: EnvironmentSharedService,
  ) {
    const options = new DocumentBuilder()
      .setTitle('main clean arch - API')
      .addBearerAuth(
        {
          type: 'apiKey',
          scheme: 'bearer',
          bearerFormat: 'JWT',
          name: 'Authorization',
          in: 'header',
        },
        'jwt-access-token',
      )
      .addTag(environmentSharedService.getEnv('API_VERSION'))
      .setDescription('main clean arch - endpoints')
      .setVersion(environmentSharedService.getEnv('API_VERSION'))
      .build();
    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup(
      environmentSharedService.getEnv('API_DOC_ENDPOINT'),
      app,
      document,
    );
    const swaggerFilePath = path.join('postman', 'postman-collection.json');

    if (!fs.existsSync(swaggerFilePath)) {
      fs.mkdirSync(swaggerFilePath.replace('postman-collection.json', ''));
    }

    fs.writeFileSync(swaggerFilePath, JSON.stringify(document, null, 2));
  }
}
