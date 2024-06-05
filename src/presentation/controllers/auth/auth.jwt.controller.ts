import { AuthenticateUserAuthJwtUseCasePort } from '@domain/ports/usecases/auth/jwt/authenticate.user.auth.jwt.use.case.port';
import { userAuthJwtJoiSchema } from '@domain/shared/validators/user.joi.schema';
import { AuthIocIdentifiers } from '@infrastructure/ioc/auth/auth.ioc.identifiers';
import { JoiValidationPipe } from '@infrastructure/rest/pipes/joi.validation.pipe';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  UsePipes,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { UserAuthJwtDto } from '@presentation/dtos/auth/user.auth.jwt.dto';

@Controller(`/api/v1/jwt`)
@ApiTags(`auth/jwt`)
export class AuthJwtController {
  constructor(
    @Inject(AuthIocIdentifiers.VALIDATE_USER.JWT)
    private authenticateUserAuthJwtUseCase: AuthenticateUserAuthJwtUseCasePort,
  ) {}

  @ApiOperation({ summary: 'get jwt access token by user credentials' })
  @Post(`/user/auth`)
  @HttpCode(HttpStatus.OK)
  @UsePipes(new JoiValidationPipe(userAuthJwtJoiSchema))
  async authenticate(@Body() userAuthJwtDto: UserAuthJwtDto) {
    return await this.authenticateUserAuthJwtUseCase.execute(userAuthJwtDto);
  }
}
