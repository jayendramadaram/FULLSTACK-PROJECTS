import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { LogRequest } from './middleware';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

/**
 * Root Of the APP with request logging middleware implemented
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    AuthModule,
    PrismaModule,
  ],
  providers: [PrismaService],
})
export class AppModule implements NestModule {
  /**
   * Configuring the middleware for routes
   */
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LogRequest).forRoutes('*');
  }
}
