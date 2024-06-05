import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { UserModel } from '@domain/models/user.model';
import { Inject } from '@nestjs/common';
import { SharedServicesIocIdentifiers } from '@infrastructure/ioc/shared/shared.services.ioc.identifiers';
import { EnvironmentSharedService } from '../environment.shared.service';
import { UtilsSharedService } from '../utils.shared.service';

export class HttpResquestSharedService {
  constructor(
    @Inject(SharedServicesIocIdentifiers.ENVIROMMENT)
    private environmentSharedService: EnvironmentSharedService,
    @Inject(SharedServicesIocIdentifiers.UTILS)
    private utilsSharedService: UtilsSharedService,
    @Inject(REQUEST) private request: Request,
  ) {}
  async setUserDataInResquestData(user: UserModel): Promise<void> {
    this.request['user'] = user;
  }
}
