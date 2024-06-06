import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CacheInterceptor, CacheModule } from '@nestjs/cache-manager';

import type { RedisClientOptions } from 'redis';

import { env } from 'process';
import { EnvironmentSharedService } from '@domain/shared/services/environment.shared.service';

import typeOrmPostgresConfigs from '../configs/typeorm/postgres';
import { RedisOptions } from '../configs/cache/redis.manager';
import { SharedServicesIocIdentifiers } from './shared/shared.services.ioc.identifiers';
import { SharedServicesModule } from './shared/shared.services.module';
import { SwaggerApiDocumentation } from '@infrastructure/rest/doc/swaggert.api.documentation';
import { CustomNestModule } from '../nest/custom/custom.nest.module';
import { UserModule } from './user/user.module';
import { MovieModule } from './movie/movie.module';
import { FindAllMovieUseCase } from '@usecases/movie/find.all.movie.use.case';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MovieIocIdentifiers } from './movie/movie.ioc.identifiers';
import { MovieRepository } from '@infrastructure/database/repositories/movie.repository';

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
    ConfigModule.forRoot({ isGlobal: true }),
    CacheModule.registerAsync(RedisOptions),
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
