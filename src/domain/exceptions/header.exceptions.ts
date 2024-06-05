import { HttpException, HttpStatus } from '@nestjs/common';
import { ExceptionCodes } from './codes';

export class AuthorizationNotFoundException extends HttpException {
  constructor(message?: any) {
    super(
      {
        exception_code: ExceptionCodes.AUTHORIZATION_HEADER_NOT_FOUND,
        message: message ? message : `header 'Authorization' not found.`,
      },
      HttpStatus.BAD_REQUEST,
    );
  }
}
