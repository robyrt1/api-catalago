import { MovieEntity } from '@infrastructure/database/entities/movie';
import { AuthModule } from '@infrastructure/ioc/auth/auth.module';
import { HttpModule } from '@nestjs/axios';
import { CacheModule } from '@nestjs/cache-manager';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

export const movieDIImports = [
  AuthModule,
  TypeOrmModule.forFeature([MovieEntity]),
  HttpModule,
  ConfigModule,
];
