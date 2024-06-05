import { MovieModel } from '@domain/models/movie.model';
import { MovieRepositoryPort } from '@domain/ports/repositories/movie.repository.port';
import { FindAllMovieUseCasePort } from '@domain/ports/usecases/movie/find.all.movie.use.case.port';
import { MovieIocIdentifiers } from '@infrastructure/ioc/movie/movie.ioc.identifiers';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class FindAllMovieUseCase implements FindAllMovieUseCasePort {
  constructor(
    @Inject(MovieIocIdentifiers.REPOSITORY)
    private movieRepositoryPort: MovieRepositoryPort,
  ) {}
  async execute(): Promise<MovieModel[]> {
    const movie = await this.movieRepositoryPort.findAll();
    return movie;
  }
}
