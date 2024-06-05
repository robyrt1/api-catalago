import { ApiProperty } from '@nestjs/swagger';

export class UserAuthJwtDto {
  @ApiProperty({ nullable: false, example: 'testuser@gmail.com' })
  email: string;

  @ApiProperty({ nullable: false, example: 'testuserpasswd' })
  password: string;
}
