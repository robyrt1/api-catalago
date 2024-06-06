import { MovieModel } from '@domain/models/movie.model';
import { MovieRepositoryPort } from '@domain/ports/repositories/movie.repository.port';
import { FindByPropMovieMovieUseCasePort } from '@domain/ports/usecases/movie/find.by.prop.movie.use.case.port';
import { MovieIocIdentifiers } from '@infrastructure/ioc/movie/movie.ioc.identifiers';
import { Inject } from '@nestjs/common';

export class FindByPropMovieUseCase implements FindByPropMovieMovieUseCasePort {
  constructor(
    @Inject(MovieIocIdentifiers.REPOSITORY)
    private movieRepository: MovieRepositoryPort,
  ) {}
  async execute(prop?: any): Promise<MovieModel> {
    return await this.movieRepository.findByProp(prop);
  }
}
