import { MovieRepository } from "@infrastructure/database/repositories/movie.repository";
import { mockedUpdateMovie, mockedMovie } from "@tests/__mocks__/movie/usecases/update.movie.use.case.mock";
import { FindByPropMovieUseCase } from "@usecases/movie/find.by.prop.movie.use.case";
import { UpdateMovieUseCase } from "@usecases/movie/update.movie.use.case";

describe('UpdateMovieUsecase', () => {
    const mockMovieRepository = MovieRepository as jest.Mock<MovieRepository>;
    const mockedMovieRepository =
        new mockMovieRepository() as jest.Mocked<MovieRepository>;

    const mockFindByPropMovieUseCase =
        FindByPropMovieUseCase as jest.Mock<FindByPropMovieUseCase>;
    const mockedFindByPropMovieUseCase = new mockFindByPropMovieUseCase(
        mockedMovieRepository,
    ) as jest.Mocked<FindByPropMovieUseCase>;

    const mockUpdateMovieUseCase = UpdateMovieUseCase as jest.Mock<UpdateMovieUseCase>
    const mockedUpdateMovieUsecase = new mockUpdateMovieUseCase(
        mockedMovieRepository,
        mockedFindByPropMovieUseCase
    ) as jest.Mocked<UpdateMovieUseCase>

    it('return updated movie data', async () => {
        const movieUpdate = mockedUpdateMovie;
        const movieFromDb = mockedMovie;
        const movieUpdated = {
            ...movieUpdate,
            activated: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        }

        jest.spyOn(mockedMovieRepository, 'upsert').mockResolvedValue(movieUpdated);
        jest.spyOn(mockedFindByPropMovieUseCase, 'execute').mockResolvedValue(movieFromDb)
        const sut = await mockedUpdateMovieUsecase.execute(movieUpdate);

        expect(sut).not.toBeUndefined();
        expect(sut).toBe(movieUpdated);
    });
});