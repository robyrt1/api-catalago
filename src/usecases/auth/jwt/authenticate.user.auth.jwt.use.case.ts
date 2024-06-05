import { UserNotAllowedException } from '@domain/exceptions/user.exceptions';
import { AuthenticateUserAuthJwtUseCasePort } from '@domain/ports/usecases/auth/jwt/authenticate.user.auth.jwt.use.case.port';
import { FindByPropUserUseCasePort } from '@domain/ports/usecases/user/find.by.prop.user.use.case.port';
import { JwtCustomSharedService } from '@domain/shared/services/jwt.custom.shared.service';
import { SharedServicesIocIdentifiers } from '@infrastructure/ioc/shared/shared.services.ioc.identifiers';
import { UserIocIdentifiers } from '@infrastructure/ioc/user/user.ioc.identifiers';
import { Inject } from '@nestjs/common';
import { UserAuthJwtDto } from '@presentation/dtos/auth/user.auth.jwt.dto';

export class AuthenticateUserAuthJwtUseCase
  implements AuthenticateUserAuthJwtUseCasePort
{
  constructor(
    @Inject(SharedServicesIocIdentifiers.JWT_CUSTOM)
    private jwtCustomSharedService: JwtCustomSharedService,
    @Inject(UserIocIdentifiers.FIND_BY_PROP_USECASE)
    private findByPropUserUseCasePort: FindByPropUserUseCasePort,
  ) {}
  async execute(userAuthJwtDto: UserAuthJwtDto): Promise<string> {
    const { email } = userAuthJwtDto;
    const queryResult = await this.findByPropUserUseCasePort.execute({ email });
    if (
      !queryResult ||
      !queryResult.activated ||
      queryResult?.email !== userAuthJwtDto.email ||
      queryResult.password !== userAuthJwtDto.password
    )
      throw new UserNotAllowedException();
    else {
      const { ...user } = queryResult;
      return await this.jwtCustomSharedService.generateJwtExpiresIn(
        {
          user: {
            ...user,
            password: undefined,
            address: undefined,
          },
        },
        '1h',
      );
    }
  }
}
