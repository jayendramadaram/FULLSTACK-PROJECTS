import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';

/**
 * Module to Setup User Logic to get their Saved Posts etc or change Password
 */
@Module({
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule {}
