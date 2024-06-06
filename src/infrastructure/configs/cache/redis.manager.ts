import { EnvironmentSharedService } from '@domain/shared/services/environment.shared.service';
import { CacheModuleOptions } from '@nestjs/cache-manager';
import * as redisStore from "cache-manager-redis-store";

const redisManager = (environmentSharedService: EnvironmentSharedService) => 
  ({
    isGlobal: true,
    store: redisStore,
    host: environmentSharedService.getEnv('REDIS_HOST'),
    port: environmentSharedService.getEnv('REDIS_PORT'),
  });
;

export default redisManager;
