import { MovieRepository } from '@infrastructure/database/repositories/movie.repository';
import { FindAllMovieUseCase } from '@usecases/movie/find.all.movie.use.case';

export const movieDIExports = [FindAllMovieUseCase, MovieRepository];
