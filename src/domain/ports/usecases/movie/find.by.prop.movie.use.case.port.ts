import { UserModel } from '@domain/models/user.model';
import { IBaseExecuteUseCasePort } from '../i.base.execute.use.case.port';
import { MovieModel } from '@domain/models/movie.model';

export type FindByPropMovieMovieUseCasePort = IBaseExecuteUseCasePort<
  { [key: string]: any },
  MovieModel
>;
