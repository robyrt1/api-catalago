import { HttpException, HttpStatus } from '@nestjs/common';
import { ExceptionCodes } from './codes';

export class MovieAlreadyRegisteredException extends HttpException {
  constructor(message?: any) {
    super(
      {
        exception_code: ExceptionCodes.MOVIE_ALREADY_REGISTERED,
        message: message ? message : `Movie title already registered`,
      },
      HttpStatus.CONFLICT,
    );
  }
}

export class MovieNotFoundException extends HttpException {
  constructor(message?: any) {
    super(
      {
        exception_code: ExceptionCodes.USER_NOT_FOUND,
        message: message ? message : `Movie not found`,
      },
      HttpStatus.FORBIDDEN,
    );
  }
}
