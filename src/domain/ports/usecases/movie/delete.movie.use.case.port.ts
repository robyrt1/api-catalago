import { MovieDto } from '@presentation/dtos/movie/movie.dto';
import { IBaseExecuteUseCasePort } from '../i.base.execute.use.case.port';
import { MovieModel } from '@domain/models/movie.model';

export type DeleteMoviePayload = Pick<MovieDto, 'id'>;

export type DeleteMovieUseCasePort = IBaseExecuteUseCasePort<
  DeleteMoviePayload,
  MovieModel
>;
