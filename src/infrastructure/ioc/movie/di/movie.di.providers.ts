import { MovieRepository } from "@infrastructure/database/repositories/movie.repository";
import { MovieIocIdentifiers } from "../movie.ioc.identifiers";
import { SharedServicesIocIdentifiers } from "@infrastructure/ioc/shared/shared.services.ioc.identifiers";
import { JwtCustomSharedService } from "@domain/shared/services/jwt.custom.shared.service";
import { FindAllMovieUseCase } from "@usecases/movie/find.all.movie.use.case";
import { HttpResquestSharedService } from "@domain/shared/services/http/http.request.shared.service";
import { UtilsSharedService } from "@domain/shared/services/utils.shared.service";

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
        useClass: MovieRepository 
    },
    {
        provide: MovieIocIdentifiers.FIND_ALL_USECASE,
        useClass: FindAllMovieUseCase
    }
]