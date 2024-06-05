import { JwtCustomSharedService } from '@domain/shared/services/jwt.custom.shared.service';
import { SharedServicesIocIdentifiers } from '@infrastructure/ioc/shared/shared.services.ioc.identifiers';
import { AuthIocIdentifiers } from '../auth.ioc.identifiers';
import { AuthenticateUserAuthJwtUseCase } from '@usecases/auth/jwt/authenticate.user.auth.jwt.use.case';
import { UserIocIdentifiers } from '@infrastructure/ioc/user/user.ioc.identifiers';
import { FindByPropUserUseCase } from '@usecases/user/find.by.prop.user.use.case';
import { UserRepository } from '@infrastructure/database/repositories/user.repository';

export const authDIProviders = [
  {
    provide: SharedServicesIocIdentifiers.JWT_CUSTOM,
    useClass: JwtCustomSharedService,
  },
  {
    provide: AuthIocIdentifiers.VALIDATE_USER.JWT,
    useClass: AuthenticateUserAuthJwtUseCase,
  },
  {
    provide: UserIocIdentifiers.FIND_BY_PROP_USECASE,
    useClass: FindByPropUserUseCase,
  },
  { provide: UserIocIdentifiers.REPOSITORY, useClass: UserRepository },
];
