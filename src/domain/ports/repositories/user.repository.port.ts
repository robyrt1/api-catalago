import { UserModel } from '@domain/models/user.model';
export interface UserRepositoryPort {
  findAll(): Promise<UserModel[]>;
  findByProp(prop: { [key: string]: any }): Promise<UserModel>;
  upsert(user: UserModel): Promise<UserModel>;
}
