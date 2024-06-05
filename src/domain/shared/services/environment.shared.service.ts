import { EnvironmentVariableNotFound } from '@domain/exceptions/internal.exceptions';
import { Injectable } from '@nestjs/common';

import { env } from 'node:process';

@Injectable()
export class EnvironmentSharedService {
  getEnv(envName: string) {
    if (!env[envName]) throw new EnvironmentVariableNotFound(envName);
    return process.env[envName];
  }
}
