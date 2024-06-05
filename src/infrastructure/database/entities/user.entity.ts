import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IsEmail, Length } from 'class-validator';

@Entity({ name: 'user' })
@Unique(['email'])
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  @IsEmail()
  email: string;

  @Column({ nullable: false })
  @Length(8, 100)
  password: string;

  @Column({ default: true })
  activated: boolean;

  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
}
