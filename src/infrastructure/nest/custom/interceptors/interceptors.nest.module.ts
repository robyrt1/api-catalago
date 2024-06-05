import { interceptorsNestDIExports } from './di/interceptors.nest..di.exports';
import { interceptorsNestDIImports } from './di/interceptors.nest.di.imports';
import { Module } from '@nestjs/common';
import { interceptorsNestDIProviders } from './di/interceptors.nest.di.providers';

@Module({
  imports: interceptorsNestDIImports,
  providers: interceptorsNestDIProviders,
  exports: interceptorsNestDIExports,
})
export class InterceptorsNestModule {}
