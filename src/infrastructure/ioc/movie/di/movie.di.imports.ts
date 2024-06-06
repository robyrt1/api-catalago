import { MovieEntity } from '@infrastructure/database/entities/movie';
import { AuthModule } from '@infrastructure/ioc/auth/auth.module';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';

export const movieDIImports = [
  AuthModule,
  TypeOrmModule.forFeature([MovieEntity]),
  HttpModule,
];
