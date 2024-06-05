import { UserModel } from '@domain/models/user.model';
import { IBaseExecuteUseCasePort } from '../i.base.execute.use.case.port';

export type FindByPropUserUseCasePort = IBaseExecuteUseCasePort<
  { [key: string]: any },
  UserModel
>;
