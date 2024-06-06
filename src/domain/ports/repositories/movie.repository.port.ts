import { MovieModel } from '@domain/models/movie.model';
import { UserModel } from '@domain/models/user.model';
import { MovieDto } from '@presentation/dtos/movie/movie.dto';
import { DeleteMoviePayload } from '../usecases/movie/delete.movie.use.case.port';
export interface MovieRepositoryPort {
  findAll(): Promise<MovieModel[]>;
  findByProp(prop: { [key: string]: any }): Promise<MovieModel>;
  upsert(input: MovieDto): Promise<MovieModel>;
  create(input: MovieDto): Promise<MovieModel>;
  delete(input: MovieModel): Promise<MovieModel>;
}
