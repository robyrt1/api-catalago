export class UserModel {
  constructor(user: UserModel) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.activated = user.activated;
    this.createdAt = user.createdAt;
    this.updatedAt = user.updatedAt;
    this.notificationsActivated = user.notificationsActivated;
  }
  id?: number;
  name: string;
  email: string;
  password: string;
  activated?: boolean;
  notificationsActivated?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
