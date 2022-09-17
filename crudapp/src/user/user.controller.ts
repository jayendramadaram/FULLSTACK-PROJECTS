import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UserService } from './user.service';
import { Request } from 'express';
import { AuthSignup, EditUser } from 'src/Typings';

/**
 * Controller for User routs
 * - get UserInfo and Saved Posts
 * - Change Password
 */
@UseGuards(AuthGuard('jwt'))
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('me')
  MyData(@Req() req: Request) {
    return req.user;
  }

  @Post('edit')
  EditMyData(@Body() User: EditUser, @Req() req: Request) {
    return this.userService.editUser(User, req.user);
  }
}
