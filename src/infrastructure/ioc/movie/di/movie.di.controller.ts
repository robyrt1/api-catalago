import { CreateMovieController } from '@presentation/controllers/movie/create.movie.controller';
import { FindAllMovieController } from '@presentation/controllers/movie/find.all.movie.controller';
import { UpdateMovieController } from '@presentation/controllers/movie/update.movie.controller';

export const movieDIController = [
  FindAllMovieController,
  CreateMovieController,
  UpdateMovieController,
];
