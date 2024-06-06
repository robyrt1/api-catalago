import { MovieModel } from '@domain/models/movie.model';
import { CreateMovieUseCasePort } from '@domain/ports/usecases/movie/create.movie.use.case.port';
import { UpdateMovieUseCasePort } from '@domain/ports/usecases/movie/update.movie.use.case.port';
import { createMovieJoiSchema } from '@domain/shared/validators/movie.joi.schema';
import { MovieIocIdentifiers } from '@infrastructure/ioc/movie/movie.ioc.identifiers';
import { JoiValidationPipe } from '@infrastructure/rest/pipes/joi.validation.pipe';
import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Inject,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MovieDto } from '@presentation/dtos/movie/movie.dto';

@ApiTags('Movie')
@Controller('api/v1/movie')
export class UpdateMovieController {
  constructor(
    @Inject(MovieIocIdentifiers.CREATE_USECASE)
    private updateMovieUsecase: UpdateMovieUseCasePort,
  ) {}

  @ApiOperation({ summary: 'create Movie' })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: `<b>Update</b>`,
  })
  @ApiBody({
    type: MovieDto,
  })
  @HttpCode(HttpStatus.NOT_FOUND)
  @Put('/')
  create(@Body(new JoiValidationPipe(createMovieJoiSchema)) movie: MovieModel) {
    return this.updateMovieUsecase.execute(movie);
  }
}
