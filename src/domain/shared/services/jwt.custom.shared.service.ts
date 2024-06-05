import { SharedServicesIocIdentifiers } from '@infrastructure/ioc/shared/shared.services.ioc.identifiers';
import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt/dist/jwt.service';
import { EnvironmentSharedService } from './environment.shared.service';
@Injectable()
export class JwtCustomSharedService {
  constructor(
    private jwtService: JwtService,
    @Inject(SharedServicesIocIdentifiers.ENVIROMMENT)
    private environmentSharedService: EnvironmentSharedService,
  ) {}
  async generateJwtExpiresIn(payload, time) {
    payload['token'] = `Bearer ${await this.jwtService.sign(payload, {
      expiresIn: time,
      secret: this.environmentSharedService.getEnv('JWT_SECRET'),
    })}`;
    return payload;
  }
  async verifyJwt(jwt) {
    return await this.jwtService.verify(jwt, {
      secret: this.environmentSharedService.getEnv('JWT_SECRET'),
    });
  }
}
