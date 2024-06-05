import { CustomLoggerSharedService } from '@domain/shared/services/custom.logger.shared.service';
import { SharedServicesIocIdentifiers } from '@infrastructure/ioc/shared/shared.services.ioc.identifiers';

export const interceptorsNestDIProviders = [
  {
    provide: SharedServicesIocIdentifiers.CUSTOM_LOGGER,
    useClass: CustomLoggerSharedService,
  },
  // { provide: SharedServicesIocIdentifiers.UTILS, useClass: UtilsSharedService },
  // {
  //   provide: APP_INTERCEPTOR,
  //   useClass: LoggingInterceptor,
  // },
  // {
  //   provide: APP_INTERCEPTOR,
  //   useClass: DataResponseInterceptor,
  // },
];
