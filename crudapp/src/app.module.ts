import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { LogRequest } from './middleware';

/**
 * Root Of the APP with request logging middleware implemented
 */
@Module({
  imports: [AuthModule],
})
export class AppModule implements NestModule {
  /**
   * Configuring the middleware for routes
   */
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogRequest).forRoutes('*');
  }
}
