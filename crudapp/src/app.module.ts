import {
  CacheModule,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { LogRequest } from './middleware';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { MailModule } from './mail/mail.module';
import { UserModule } from './user/user.module';
import { SavedPostModule } from './saved-post/saved-post.module';
import * as ReddiStore from 'cache-manager-redis-store';

/**
 * Root Of the APP with request logging middleware implemented
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CacheModule.register({
      store: ReddiStore,
      socket: {
        host: 'localhost',
        port: '6379',
      },
      isGlobal: true,
      ttl: 1200,
    }),
    AuthModule,
    PrismaModule,
    MailModule,
    UserModule,
    SavedPostModule,
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
