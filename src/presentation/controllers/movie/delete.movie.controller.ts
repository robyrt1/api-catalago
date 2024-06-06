import { MovieModel } from '@domain/models/movie.model';
import {
  DeleteMoviePayload,
  DeleteMovieUseCasePort,
} from '@domain/ports/usecases/movie/delete.movie.use.case.port';
import { DeleteMovieJoiSchema } from '@domain/shared/validators/movie.joi.schema';
import { MovieIocIdentifiers } from '@infrastructure/ioc/movie/movie.ioc.identifiers';
import { JoiValidationPipe } from '@infrastructure/rest/pipes/joi.validation.pipe';
import {
  Body,
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Inject,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MovieDto } from '@presentation/dtos/movie/movie.dto';

@ApiTags('Movie')
@Controller('api/v1/movie')
export class DeleteMovieController {
  constructor(
    @Inject(MovieIocIdentifiers.DELETE_USECASE)
    private deleteMovieUsecase: DeleteMovieUseCasePort,
  ) {}

  @ApiOperation({ summary: 'delete Movie' })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: `<b>delete</b>`,
  })
  @ApiBody({
    type: MovieDto,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete('/')
  create(
    @Body(new JoiValidationPipe(DeleteMovieJoiSchema))
    movie: DeleteMoviePayload,
  ) {
    return this.deleteMovieUsecase.execute(movie);
  }
}
