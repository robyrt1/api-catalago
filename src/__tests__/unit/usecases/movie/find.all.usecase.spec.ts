import { MovieRepository } from '@infrastructure/database/repositories/movie.repository';
import { mockedMovie } from '@tests/__mocks__/movie/usecases/find.all.movie.use.case.mock';
import { FindAllMovieUseCase } from '@usecases/movie/find.all.movie.use.case';

describe('FindByPropUserUseCase', () => {
  const mockMovieRepository = MovieRepository as jest.Mock<MovieRepository>;
  const mockedMovieRepository =
    new mockMovieRepository() as jest.Mocked<MovieRepository>;

  const mockFindAllMovieUseCase =
    FindAllMovieUseCase as jest.Mock<FindAllMovieUseCase>;
  const mockedFindAllMovieUseCase = new mockFindAllMovieUseCase(
    mockedMovieRepository,
  ) as jest.Mocked<FindAllMovieUseCase>;

  it('should get all movies', async () => {
    const movie = mockedMovie;

    jest.spyOn(mockedMovieRepository, 'findAll').mockResolvedValue(movie);

    const sut = await mockedFindAllMovieUseCase.execute();

    expect(sut).not.toBeUndefined();
    expect(sut).toBe(movie);
  });
});
