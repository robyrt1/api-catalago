import { MovieModel } from '@domain/models/movie.model';
import {
  CreateMoviePayload,
  CreateMovieUseCasePort,
} from '@domain/ports/usecases/movie/create.movie.use.case.port';
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
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MovieDto } from '@presentation/dtos/movie/movie.dto';

@ApiTags('Movie')
@Controller('api/v1/movie')
export class CreateMovieController {
  constructor(
    @Inject(MovieIocIdentifiers.CREATE_USECASE)
    private createMovieUsecase: CreateMovieUseCasePort,
  ) {}

  @ApiOperation({ summary: 'create Movie' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: `<b>created</b>`,
  })
  @ApiBody({
    type: MovieDto,
  })
  @HttpCode(HttpStatus.CREATED)
  @Post('/')
  create(
    @Body(new JoiValidationPipe(createMovieJoiSchema))
    movie: CreateMoviePayload,
  ) {
    return this.createMovieUsecase.execute(movie);
  }
}
