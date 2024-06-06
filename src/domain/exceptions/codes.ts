export enum ExceptionCodes {
  GENERIC_INTERNAL = 'IER001',
  USER_ALREADY_REGISTERED = 'USER002',
  USER_SECRET_NOT_FOUND = 'USER003',
  USER_NOT_ALLOWED = 'USER005',
  USER_NOT_ACTIVE = 'USER006',
  USER_NOT_FOUND = 'USER007',
  USER_NOT_AUTHORIZED = 'USER005',
  USER_FORBIDDEN = 'USER009',

  Movie_ALREADY_REGISTERED = 'MV001',

  AUTHORIZATION_HEADER_NOT_FOUND = 'AUTH001',

  ENVIRONMENT_VARIABLE_NOT_FOUND = 'ENVVARNOTFOUND',

  MISSING_FILED_OR_INVALID_TYPE = 'VALIDATION001',
  INVALID_JWT_TOKEN = 'AUTH002',

  CUSTOM_HTTP_EXCEPTION = 'CUSTOM_HTTP_EXCEPTION',
}
