import { HttpException, HttpStatus } from '@nestjs/common';
import { ExceptionCodes } from './codes';

export class UserNotAllowedException extends HttpException {
  constructor(message?: any) {
    super(
      {
        exception_code: ExceptionCodes.USER_NOT_ALLOWED,
        message: message ? message : `user not allowed`,
      },
      HttpStatus.UNAUTHORIZED,
    );
  }
}
