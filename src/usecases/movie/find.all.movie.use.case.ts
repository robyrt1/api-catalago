import { MovieModel } from '@domain/models/movie.model';
import { MovieRepositoryPort } from '@domain/ports/repositories/movie.repository.port';
import { FindAllMovieUseCasePort } from '@domain/ports/usecases/movie/find.all.movie.use.case.port';
import { MovieIocIdentifiers } from '@infrastructure/ioc/movie/movie.ioc.identifiers';
import { CacheKeys } from '@infrastructure/shared/constants/cache.keys';
import { CACHE_MANAGER, Cache } from '@nestjs/cache-manager';
import { Inject, Injectable } from '@nestjs/common';
import { isNull } from 'lodash';

@Injectable()
export class FindAllMovieUseCase implements FindAllMovieUseCasePort {
  constructor(
    @Inject(MovieIocIdentifiers.REPOSITORY)
    private movieRepositoryPort: MovieRepositoryPort,
    @Inject(CACHE_MANAGER) private cacheManager: Cache
  ) { }
  async execute(): Promise<MovieModel[]> {
    const movieInCache = await this.cacheManager.get<MovieModel[]>(CacheKeys.FIND_ALL_MOVIE)
    if (isNull(movieInCache)) {
      const movie = await this.movieRepositoryPort.findAll();
      await this.cacheManager.set(CacheKeys.FIND_ALL_MOVIE, movie)
      return movie;
    }
    return movieInCache;
  }
}
