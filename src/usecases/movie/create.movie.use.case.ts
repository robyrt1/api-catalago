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
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { CacheKeys } from '@infrastructure/shared/constants/cache.keys';

export class CreateMovieUseCase implements CreateMovieUseCasePort {
  constructor(
    @Inject(MovieIocIdentifiers.FIND_BY_PROP_USECASE)
    private findByPropMovieUseCase: FindByPropMovieMovieUseCasePort,
    @Inject(MovieIocIdentifiers.REPOSITORY)
    private movieRepository: MovieRepositoryPort,
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
  ) {}
  async execute(movie: CreateMoviePayload): Promise<MovieModel> {
    const shouldMovie = await this.findByPropMovieUseCase.execute({
      title: movie.title,
    });
    const shouldNotMovie = !!head([shouldMovie]);
    if (shouldNotMovie) throw new MovieAlreadyRegisteredException();

    const MovieCreated = await this.movieRepository.create(movie);
    await this.cacheManager.del(CacheKeys.FIND_ALL_MOVIE);

    return MovieCreated;
  }
}
