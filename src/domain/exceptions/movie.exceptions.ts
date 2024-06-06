import { HttpException, HttpStatus } from '@nestjs/common';
import { ExceptionCodes } from './codes';

export class MovieAlreadyRegisteredException extends HttpException {
  constructor(message?: any) {
    super(
      {
        exception_code: ExceptionCodes.Movie_ALREADY_REGISTERED,
        message: message ? message : `Movie title already registered`,
      },
      HttpStatus.CONFLICT,
    );
  }
}
