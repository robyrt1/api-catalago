import { FindAllMovieUseCasePort } from '@domain/ports/usecases/movie/find.all.movie.use.case.port';
import { MovieIocIdentifiers } from '@infrastructure/ioc/movie/movie.ioc.identifiers';
import { Controller, Get, HttpCode, HttpStatus, Inject } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Movie')
@Controller('api/v1/movie')
export class FindAllMovieController {
  constructor(
    @Inject(MovieIocIdentifiers.FIND_ALL_USECASE)
    private findAllMovieUsecase: FindAllMovieUseCasePort,
  ) {}

  @ApiOperation({ summary: 'get all Movie' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: `<b>OK</b>`,
  })
  @HttpCode(HttpStatus.OK)
  @Get('/')
  async findAll() {
    return await this.findAllMovieUsecase.execute();
  }
}
