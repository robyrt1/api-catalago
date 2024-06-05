import { MovieEntity } from '@infrastructure/database/entities/movie';
import { UserEntity } from '@infrastructure/database/entities/user.entity';
import { HttpModule } from '@nestjs/axios';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

export const authDIImports = [
  JwtModule.register({}),
  TypeOrmModule.forFeature([UserEntity, MovieEntity]),
  HttpModule,
];
