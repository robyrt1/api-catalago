import { Inject, Injectable } from '@nestjs/common';
import { UserModel } from '../../domain/models/user.model';
import { UserIocIdentifiers } from '@infrastructure/ioc/user/user.ioc.identifiers';
import { FindByPropUserUseCasePort } from '@domain/ports/usecases/user/find.by.prop.user.use.case.port';
import { UserRepositoryPort } from '@domain/ports/repositories/user.repository.port';

@Injectable()
export class FindByPropUserUseCase implements FindByPropUserUseCasePort {
  constructor(
    @Inject(UserIocIdentifiers.REPOSITORY)
    private userRepositoryPort: UserRepositoryPort,
  ) {}

  async execute(prop): Promise<UserModel> {
    const user = await this.userRepositoryPort.findByProp(prop);
    return user;
  }
}
