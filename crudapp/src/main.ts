import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

/**
 * Init of Out APP
 * > well i am using global piplines to validate icomming request Body with the help of typescript
 */
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /**
   * These global Pipes ensure to extract data from incomming Body
   * I was also using class-validator and class-transformer for support
   */
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
