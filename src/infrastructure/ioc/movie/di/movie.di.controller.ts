import { CreateMovieController } from '@presentation/controllers/movie/create.movie.controller';
import { FindAllMovieController } from '@presentation/controllers/movie/find.all.movie.controller';

export const movieDIController = [
  FindAllMovieController,
  CreateMovieController,
];
