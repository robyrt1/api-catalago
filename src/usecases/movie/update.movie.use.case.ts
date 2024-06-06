import { MovieNotFoundException } from '@domain/exceptions/movie.exceptions';
import { MovieModel } from '@domain/models/movie.model';
import { MovieRepositoryPort } from '@domain/ports/repositories/movie.repository.port';
import { FindByPropMovieMovieUseCasePort } from '@domain/ports/usecases/movie/find.by.prop.movie.use.case.port';
import { UpdateMovieUseCasePort } from '@domain/ports/usecases/movie/update.movie.use.case.port';
import { MovieIocIdentifiers } from '@infrastructure/ioc/movie/movie.ioc.identifiers';
import { Inject, Injectable } from '@nestjs/common';
import { MovieDto } from '@presentation/dtos/movie/movie.dto';
import { head } from 'lodash';

@Injectable()
export class UpdateMovieUseCase implements UpdateMovieUseCasePort {
  constructor(
    @Inject(MovieIocIdentifiers.REPOSITORY)
    private movieRepository: MovieRepositoryPort,
    @Inject(MovieIocIdentifiers.FIND_BY_PROP_USECASE)
    private findByPropMovieUseCase: FindByPropMovieMovieUseCasePort,
  ) {}
  async execute(movie: MovieDto): Promise<MovieModel> {
    const shouldMovie = await this.findByPropMovieUseCase.execute({
      title: movie.title,
    });
    const shouldNotMovie = !!head([shouldMovie]);
    if (!shouldNotMovie) throw new MovieNotFoundException();

    return await this.movieRepository.upsert(movie);
  }
}
