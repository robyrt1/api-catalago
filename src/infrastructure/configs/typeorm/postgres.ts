import { TypeOrmModuleAsyncOptions } from '@nestjs/typeorm';

import { EnvironmentSharedService } from '@domain/shared/services/environment.shared.service';
import { UserEntity } from '@infrastructure/database/entities/user.entity';
import { MovieEntity } from '@infrastructure/database/entities/movie';

const configs = (environmentSharedService: EnvironmentSharedService) =>
  ({
    // name: 'secondConnection',
    type: environmentSharedService.getEnv('POSTGRES_TYPEORM_NAME'),
    host: environmentSharedService.getEnv('POSTGRES_HOST'),
    port: environmentSharedService.getEnv('POSTGRES_PORT'),
    username: environmentSharedService.getEnv('POSTGRES_USERNAME'),
    password: environmentSharedService.getEnv('POSTGRES_PASSWORD'),
    database: environmentSharedService.getEnv('POSTGRES_DATABASE'),
    entities: [UserEntity, MovieEntity],
    synchronize: true,
    logging: false,
    migrationsRun: false,
    applicationName: 'redacted',
  }) as TypeOrmModuleAsyncOptions;

export default configs;
