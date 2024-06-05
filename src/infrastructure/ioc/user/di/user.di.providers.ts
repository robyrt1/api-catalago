import { EnvironmentSharedService } from '@domain/shared/services/environment.shared.service';
import { HttpResquestSharedService } from '@domain/shared/services/http/http.request.shared.service';
import { JwtCustomSharedService } from '@domain/shared/services/jwt.custom.shared.service';
import { UtilsSharedService } from '@domain/shared/services/utils.shared.service';
import { UserRepository } from '@infrastructure/database/repositories/user.repository';
import { SharedServicesIocIdentifiers } from '@infrastructure/ioc/shared/shared.services.ioc.identifiers';
import { UserIocIdentifiers } from '../user.ioc.identifiers';
import { FindByPropUserUseCase } from '@usecases/user/find.by.prop.user.use.case';

export const userDIProviders = [
  {
    provide: SharedServicesIocIdentifiers.JWT_CUSTOM,
    useClass: JwtCustomSharedService,
  },
  { provide: SharedServicesIocIdentifiers.UTILS, useClass: UtilsSharedService },
  {
    provide: SharedServicesIocIdentifiers.ENVIROMMENT,
    useClass: EnvironmentSharedService,
  },
  {
    provide: SharedServicesIocIdentifiers.HTTP_REQUEST,
    useClass: HttpResquestSharedService,
  },
  { provide: UserIocIdentifiers.REPOSITORY, useClass: UserRepository },
  {
    provide: UserIocIdentifiers.FIND_BY_PROP_USECASE,
    useClass: FindByPropUserUseCase,
  },
];
