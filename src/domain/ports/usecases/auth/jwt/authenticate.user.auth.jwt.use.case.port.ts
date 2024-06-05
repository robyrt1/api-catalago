import { UserAuthJwtModel } from '@domain/models/auth.model';
import { IBaseExecuteUseCasePort } from '../../i.base.execute.use.case.port';

export type AuthenticateUserAuthJwtUseCasePort = IBaseExecuteUseCasePort<
  UserAuthJwtModel,
  { [key: string]: any }
>;
