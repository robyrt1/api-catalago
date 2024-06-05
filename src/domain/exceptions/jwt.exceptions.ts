import { HttpException, HttpStatus } from '@nestjs/common';
import { ExceptionCodes } from './codes';

export class InvalidJwtToken extends HttpException {
  constructor(message?: any) {
    super(
      {
        exception_code: ExceptionCodes.INVALID_JWT_TOKEN,
        message: message ? message : `invalid jwt token`,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}

export class ErrorTryingToGenerateJwt extends HttpException {
  constructor(message?: any) {
    super(
      {
        exception_code: ExceptionCodes.GENERIC_INTERNAL,
        message: message ? message : `error trying to generate jwt token`,
      },
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
