import { UserEntity } from '@infrastructure/database/entities/user.entity';
import { AuthModule } from '@infrastructure/ioc/auth/auth.module';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';

export const userDIImports = [
  AuthModule,
  TypeOrmModule.forFeature([UserEntity]),
  HttpModule,
];
