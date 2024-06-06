import { MovieRepositoryPort } from '@domain/ports/repositories/movie.repository.port';
import { MovieEntity } from '../entities/movie';
import { MovieModel } from '@domain/models/movie.model';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MovieDto } from '@presentation/dtos/movie/movie.dto';
import { CreateMoviePayload } from '@domain/ports/usecases/movie/create.movie.use.case.port';
import { DeleteMoviePayload } from '@domain/ports/usecases/movie/delete.movie.use.case.port';

export class MovieRepository implements MovieRepositoryPort {
  constructor(
    @InjectRepository(MovieEntity)
    private movieRepository: Repository<MovieModel>,
  ) {}
  async findAll(): Promise<MovieModel[]> {
    const movie = await this.movieRepository.find();
    return movie;
  }
  async findByProp(prop: { [key: string]: any }): Promise<MovieModel> {
    const movie = await this.movieRepository.findOne({ where: prop });
    return movie;
  }
  async create(movie: CreateMoviePayload): Promise<MovieModel> {
    const insertedMovie = await this.movieRepository.save(movie);
    return insertedMovie;
  }

  async upsert(movie: MovieDto): Promise<MovieModel> {
    return await this.movieRepository.save(movie);
  }

  async delete(movie: MovieModel): Promise<MovieModel> {
    return await this.movieRepository.remove(movie);
  }
}
