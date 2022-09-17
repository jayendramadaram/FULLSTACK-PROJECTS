import { Controller, Post, Get, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

/**
 * Controller to take all requests and send responses
 *
 * - Signup
 * - Signin
 * - forgot Passwrod
 * - Verify Otp
 */
@Controller('auth')
export class AuthController {
  constructor(private AuthService: AuthService) {}

  @Post('/Signup')
  Signup(@Body() body): Promise<string> {
    return this.AuthService.signupLogic(body);
  }

  @Post('/Login')
  Login(): Promise<string> {
    return this.AuthService.loginLogic();
  }

  @Post('/forgotPwd')
  ForgotPwd(): Promise<string> {
    return this.AuthService.forgotLogic();
  }

  @Post('/verifyOTP')
  verifyOTP(): Promise<string> {
    return this.AuthService.verifyLogic();
  }
}
