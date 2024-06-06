export class MovieModel {
  constructor(movie: MovieModel) {
    this.id = movie.id;
    this.title = movie.title;
    this.director = movie.director;
    this.releaseDate = movie.releaseDate;
    this.activated = movie.activated;
    this.createdAt = movie.createdAt;
    this.updatedAt = movie.updatedAt;
  }
  id?: number;
  title: string;
  director: string;
  releaseDate: string;
  activated: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}
