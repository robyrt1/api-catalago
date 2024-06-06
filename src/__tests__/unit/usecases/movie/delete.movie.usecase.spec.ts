import { MovieRepository } from '@infrastructure/database/repositories/movie.repository';
import {
  mockedDeleteMovie,
  mockedMovie,
} from '@tests/__mocks__/movie/usecases/delete.movie.use.case.mock';
import { DeleteMovieUseCase } from '@usecases/movie/delete.movie.use.case';
import { FindByPropMovieUseCase } from '@usecases/movie/find.by.prop.movie.use.case';

describe('DeleteMovieUsecase', () => {
  const mockMovieRepository = MovieRepository as jest.Mock<MovieRepository>;
  const mockedMovieRepository =
    new mockMovieRepository() as jest.Mocked<MovieRepository>;

  const mockFindByPropMovieUseCase =
    FindByPropMovieUseCase as jest.Mock<FindByPropMovieUseCase>;
  const mockedFindByPropMovieUseCase = new mockFindByPropMovieUseCase(
    mockedMovieRepository,
  ) as jest.Mocked<FindByPropMovieUseCase>;

  const mockDeleteMovieUseCase =
    DeleteMovieUseCase as jest.Mock<DeleteMovieUseCase>;
  const mockedDeleteMovieUsecase = new mockDeleteMovieUseCase(
    mockedMovieRepository,
    mockedFindByPropMovieUseCase,
  ) as jest.Mocked<DeleteMovieUseCase>;

  it('return the deleted movie', async () => {
    const movieDelete = mockedDeleteMovie;
    const movieFromDb = mockedMovie;

    jest.spyOn(mockedMovieRepository, 'delete').mockResolvedValue(movieFromDb);
    jest
      .spyOn(mockedFindByPropMovieUseCase, 'execute')
      .mockResolvedValue(movieFromDb);
    const sut = await mockedDeleteMovieUsecase.execute(movieDelete);

    expect(sut).not.toBeUndefined();
    expect(sut).toBe(movieFromDb);
  });
});
