import { ApiProperty } from '@nestjs/swagger';

export class MovieDto {
  @ApiProperty({ nullable: false, example: 1 })
  id?: number;

  @ApiProperty({ nullable: false, example: 'the end' })
  title: string;

  @ApiProperty({ nullable: false, example: 'test diretor' })
  director: string;

  @ApiProperty({ nullable: false, example: '2020-01-02' })
  releaseDate: string;
}
