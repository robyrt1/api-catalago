import { Inject, Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
import { InvalidJwtToken } from '@domain/exceptions/jwt.exceptions';
import { JwtCustomSharedService } from '@domain/shared/services/jwt.custom.shared.service';
import { SharedServicesIocIdentifiers } from '@infrastructure/ioc/shared/shared.services.ioc.identifiers';
import { HttpResquestSharedService } from '@domain/shared/services/http/http.request.shared.service';
import { AuthorizationNotFoundException } from '@domain/exceptions/header.exceptions';
@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(
    @Inject(SharedServicesIocIdentifiers.JWT_CUSTOM)
    private jwtCustomSharedService: JwtCustomSharedService,
    @Inject(SharedServicesIocIdentifiers.HTTP_REQUEST)
    private httpResquestSharedService: HttpResquestSharedService,
  ) {}
  async use(req: Request, res: Response, next: any) {
    const headers = req.headers;
    if (!headers['authorization']) throw new AuthorizationNotFoundException();
    await this.jwtCustomSharedService
      .verifyJwt(headers['authorization'].replace('Bearer ', ''))
      .then((jwtDecrypted) =>
        this.httpResquestSharedService.setUserDataInResquestData(
          jwtDecrypted['user'],
        ),
      )
      .then(() => next())
      .catch((jwtError) => {
        throw new InvalidJwtToken(jwtError.message);
      });
  }
}
