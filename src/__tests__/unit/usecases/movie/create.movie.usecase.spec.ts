import { MovieRepository } from '@infrastructure/database/repositories/movie.repository';
import {
  mockedCreateMovie,
  mockedCreatedMovie,
} from '@tests/__mocks__/movie/usecases/create.movie.use.case.mock';
import { CreateMovieUseCase } from '@usecases/movie/create.movie.use.case';
import { FindByPropMovieUseCase } from '@usecases/movie/find.by.prop.movie.use.case';

describe('CreateMovieUsecase', () => {
  const mockMovieRepository = MovieRepository as jest.Mock<MovieRepository>;
  const mockedMovieRepository =
    new mockMovieRepository() as jest.Mocked<MovieRepository>;

  const mockFindByPropMovieUseCase =
    FindByPropMovieUseCase as jest.Mock<FindByPropMovieUseCase>;
  const mockedFindByPropMovieUseCase = new mockFindByPropMovieUseCase(
    mockedMovieRepository,
  ) as jest.Mocked<FindByPropMovieUseCase>;

  const mockCreateMovieUseCase =
    CreateMovieUseCase as jest.Mock<CreateMovieUseCase>;
  const mockedCreateMovieUsecase = new mockCreateMovieUseCase(
    mockedFindByPropMovieUseCase,
    mockedMovieRepository,
  ) as jest.Mocked<CreateMovieUseCase>;

  it('should new movies', async () => {
    const movieCreate = mockedCreateMovie;
    const movieCreated = mockedCreatedMovie;

    jest.spyOn(mockedMovieRepository, 'create').mockResolvedValue(movieCreated);
    jest.spyOn(mockedFindByPropMovieUseCase, 'execute').mockResolvedValue(null);
    const sut = await mockedCreateMovieUsecase.execute(movieCreate);

    expect(sut).not.toBeUndefined();
    expect(sut).toBe(movieCreated);
  });
});
