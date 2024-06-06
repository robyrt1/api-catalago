import { MovieModel } from '@domain/models/movie.model';

export const mockedMovie: MovieModel[] = [
  {
    id: 1,
    title: 'teste',
    director: 'teste',
    releaseDate: '2024-06-05T20:08:19.266Z',
    activated: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 2,
    title: 'the end',
    director: 'test diretor',
    releaseDate: '2020-01-02T03:00:00.000Z',
    activated: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
