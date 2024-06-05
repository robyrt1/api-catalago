import { EnvironmentSharedService } from '@domain/shared/services/environment.shared.service';
import { SharedServicesIocIdentifiers } from '../shared.services.ioc.identifiers';
import { UtilsSharedService } from '@domain/shared/services/utils.shared.service';

export const sharedServicesDIProviders = [
  {
    provide: SharedServicesIocIdentifiers.ENVIROMMENT,
    useClass: EnvironmentSharedService,
  },
  { provide: SharedServicesIocIdentifiers.UTILS, useClass: UtilsSharedService },
];
