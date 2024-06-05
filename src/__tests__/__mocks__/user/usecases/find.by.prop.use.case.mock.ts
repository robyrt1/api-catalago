import { UserModel } from '../../../../domain/models/user.model';

export const mockedUsers: UserModel[] = [
  {
    id: 1,
    name: 'admin',
    email: 'admin@gmail.com',
    password: 'admin',
    activated: true,
  },
  {
    id: 2,
    name: 'consultant',
    email: 'consultant@gmail.com',
    password: 'consultant',
    activated: true,
  },
  {
    id: 3,
    name: 'test',
    email: 'testuser@gmail.com',
    password: 'testuserpasswd',
    activated: true,
  },
];
