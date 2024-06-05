import { Global, Module } from '@nestjs/common';
import { sharedServicesDIImports } from './di/shared.services.di.imports';
import { sharedServicesDIProviders } from './di/shared.services.di.providers';
import { sharedServicesDIControllers } from './di/shared.services.di.controllers';
import { sharedServicesDIExports } from './di/shared.services.di.exports';

@Global()
@Module({
  imports: sharedServicesDIImports,
  providers: sharedServicesDIProviders,
  controllers: sharedServicesDIControllers,
  exports: sharedServicesDIExports,
})
export class SharedServicesModule {}
