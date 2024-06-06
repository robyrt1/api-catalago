import { MovieRepository } from '@infrastructure/database/repositories/movie.repository';
import { MovieIocIdentifiers } from '../movie.ioc.identifiers';
import { SharedServicesIocIdentifiers } from '@infrastructure/ioc/shared/shared.services.ioc.identifiers';
import { JwtCustomSharedService } from '@domain/shared/services/jwt.custom.shared.service';
import { FindAllMovieUseCase } from '@usecases/movie/find.all.movie.use.case';
import { HttpResquestSharedService } from '@domain/shared/services/http/http.request.shared.service';
import { UtilsSharedService } from '@domain/shared/services/utils.shared.service';
import { CreateMovieUseCase } from '@usecases/movie/create.movie.use.case';
import { FindByPropMovieUseCase } from '@usecases/movie/find.by.prop.movie.use.case';
import { UpdateMovieUseCase } from '@usecases/movie/update.movie.use.case';
import { DeleteMovieUseCase } from '@usecases/movie/delete.movie.use.case';

export const movieDIProviders = [
  {
    provide: SharedServicesIocIdentifiers.JWT_CUSTOM,
    useClass: JwtCustomSharedService,
  },
  {
    provide: SharedServicesIocIdentifiers.HTTP_REQUEST,
    useClass: HttpResquestSharedService,
  },
  { provide: SharedServicesIocIdentifiers.UTILS, useClass: UtilsSharedService },

  {
    provide: MovieIocIdentifiers.REPOSITORY,
    useClass: MovieRepository,
  },
  {
    provide: MovieIocIdentifiers.FIND_ALL_USECASE,
    useClass: FindAllMovieUseCase,
  },
  {
    provide: MovieIocIdentifiers.FIND_BY_PROP_USECASE,
    useClass: FindByPropMovieUseCase,
  },
  {
    provide: MovieIocIdentifiers.CREATE_USECASE,
    useClass: CreateMovieUseCase,
  },
  {
    provide: MovieIocIdentifiers.UPDATE_USECASE,
    useClass: UpdateMovieUseCase,
  },
  {
    provide: MovieIocIdentifiers.DELETE_USECASE,
    useClass: DeleteMovieUseCase,
  },
];
