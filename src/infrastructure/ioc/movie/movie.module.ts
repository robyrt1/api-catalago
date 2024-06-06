import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { movieDIController } from './di/movie.di.controller';
import { AuthMiddleware } from '@presentation/middlewares/auth.middleware';
import { movieDIProviders } from './di/movie.di.providers';
import { movieDIImports } from './di/movie.di.imports';

@Module({
  imports: movieDIImports,
  controllers: movieDIController,
  providers: movieDIProviders,
})
export class MovieModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(...movieDIController);
  }
}
