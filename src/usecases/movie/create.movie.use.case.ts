import { Inject } from '@nestjs/common';
import { head } from 'lodash';

import { MovieAlreadyRegisteredException } from '@domain/exceptions/movie.exceptions';

import { MovieModel } from '@domain/models/movie.model';

import { MovieRepositoryPort } from '@domain/ports/repositories/movie.repository.port';
import {
  CreateMoviePayload,
  CreateMovieUseCasePort,
} from '@domain/ports/usecases/movie/create.movie.use.case.port';
import { FindByPropMovieMovieUseCasePort } from '@domain/ports/usecases/movie/find.by.prop.movie.use.case.port';

import { MovieIocIdentifiers } from '@infrastructure/ioc/movie/movie.ioc.identifiers';

export class CreateMovieUseCase implements CreateMovieUseCasePort {
  constructor(
    @Inject(MovieIocIdentifiers.FIND_BY_PROP_USECASE)
    private findByPropMovieUseCase: FindByPropMovieMovieUseCasePort,
    @Inject(MovieIocIdentifiers.REPOSITORY)
    private movieRepository: MovieRepositoryPort,
  ) {}
  async execute(movie: CreateMoviePayload): Promise<MovieModel> {
    const shouldMovie = await this.findByPropMovieUseCase.execute({
      title: movie.title,
    });
    const shouldNotMovie = !!head([shouldMovie]);
    if (shouldNotMovie) throw new MovieAlreadyRegisteredException();

    return await this.movieRepository.create(movie);
  }
}
