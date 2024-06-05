import { Module } from '@nestjs/common';
import { authDIProviders } from './di/auth.di.providers';
import { authDIImports } from './di/auth.di.imports';
import { authDIControllers } from './di/auth.di.controllers';
import { authDIExports } from './di/auth.di.exports';

@Module({
  imports: authDIImports,
  providers: authDIProviders,
  controllers: authDIControllers,
  exports: authDIExports,
})
export class AuthModule {}
