import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { userDIControllers } from './di/user.di.controllers';
import { userDIProviders } from './di/user.di.providers';
import { userDIImports } from './di/user.di.imports';
import { userDIExports } from './di/user.di.exports';
import { AuthMiddleware } from '@presentation/middlewares/auth.middleware';

@Module({
  imports: userDIImports,
  controllers: userDIControllers,
  providers: userDIProviders,
  exports: userDIExports,
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(...userDIControllers);
  }
}
