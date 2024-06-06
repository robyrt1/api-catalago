import { FindByPropMovieMovieUseCasePort } from '@domain/ports/usecases/movie/find.by.prop.movie.use.case.port';
import { MovieIocIdentifiers } from '@infrastructure/ioc/movie/movie.ioc.identifiers';
import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Inject,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Movie')
@Controller('api/v1/movie')
export class FindByIdMovieController {
  constructor(
    @Inject(MovieIocIdentifiers.FIND_BY_PROP_USECASE)
    private findAByPropMovieUsecase: FindByPropMovieMovieUseCasePort,
  ) {}

  @ApiOperation({ summary: 'get Movie by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: `<b>OK</b>`,
  })
  @HttpCode(HttpStatus.OK)
  @Get('/:id')
  async findAll(@Param('id', ParseIntPipe) id: number) {
    return await this.findAByPropMovieUsecase.execute({ id });
  }
}
