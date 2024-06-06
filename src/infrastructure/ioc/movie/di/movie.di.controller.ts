import { CreateMovieController } from '@presentation/controllers/movie/create.movie.controller';
import { DeleteMovieController } from '@presentation/controllers/movie/delete.movie.controller';
import { FindAllMovieController } from '@presentation/controllers/movie/find.all.movie.controller';
import { FindByIdMovieController } from '@presentation/controllers/movie/find.by.id.movie.controller';
import { UpdateMovieController } from '@presentation/controllers/movie/update.movie.controller';

export const movieDIController = [
  FindAllMovieController,
  FindByIdMovieController,
  CreateMovieController,
  UpdateMovieController,
  DeleteMovieController,
];
