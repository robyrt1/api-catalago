import { EnvironmentSharedService } from '@domain/shared/services/environment.shared.service';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { env } from 'process';

import typeOrmPostgresConfigs from '../configs/typeorm/postgres';
import { SharedServicesIocIdentifiers } from './shared/shared.services.ioc.identifiers';
import { SharedServicesModule } from './shared/shared.services.module';
import { SwaggerApiDocumentation } from '@infrastructure/rest/doc/swaggert.api.documentation';
import { CustomNestModule } from '../nest/custom/custom.nest.module';
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `env-files/.config.${(env?.NODE_ENV || 'development') as string}.env`,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: (environmentSharedService: EnvironmentSharedService) =>
        typeOrmPostgresConfigs(environmentSharedService),
      inject: [SharedServicesIocIdentifiers.ENVIROMMENT],
    }),
    SharedServicesModule,
    SwaggerApiDocumentation,
    CustomNestModule,

    UserModule,
    MovieModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
