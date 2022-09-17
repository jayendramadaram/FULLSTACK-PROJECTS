import { Controller, Post, Get } from '@nestjs/common';
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
  async Signup(): Promise<string> {
    return this.AuthService.signupLogic();
  }

  @Post('/Login')
  async Login(): Promise<string> {
    return this.AuthService.loginLogic();
  }

  @Post('/forgotPwd')
  async ForgotPwd(): Promise<string> {
    return this.AuthService.forgotLogic();
  }

  @Post('/verifyOTP')
  async verifyOTP(): Promise<string> {
    return this.AuthService.verifyLogic();
  }
}
