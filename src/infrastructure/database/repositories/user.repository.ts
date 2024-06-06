import { UserModel } from '@domain/models/user.model';
import { UserRepositoryPort } from '@domain/ports/repositories/user.repository.port';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm/repository/Repository';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserRepository implements UserRepositoryPort {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserModel>,
  ) {}
  async findAll(): Promise<UserModel[]> {
    const users = await this.userRepository.find();
    return users;
  }
  async findByProp(prop: { [key: string]: any }): Promise<UserModel> {
    const user = await this.userRepository.findOne({ where: prop });
    return user;
  }

  async create(user: UserModel): Promise<UserModel> {
    const insertedUser = await this.userRepository.save(user);
    return insertedUser;
  }

  async upsert(user: UserModel): Promise<UserModel> {
    return await this.userRepository.save(user);
  }
}
