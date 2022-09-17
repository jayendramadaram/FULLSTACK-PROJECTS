import { Controller, Post, Get, Body } from '@nestjs/common';
import { AuthLogin, AuthSignup } from 'src/Typings';
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
  Signup(@Body() body: AuthSignup): Promise<object> {
    return this.AuthService.signupLogic(body);
  }

  @Post('/Login')
  Login(@Body() body: AuthLogin): Promise<object> {
    return this.AuthService.loginLogic(body);
  }

  @Post('/forgotPwd')
  ForgotPwd(@Body('email') email: string): Promise<object> {
    return this.AuthService.forgotLogic(email);
  }

  @Post('/verifyOTP')
  verifyOTP(
    @Body('OTP') OTP: number,
    @Body('email') email: string,
  ): Promise<object> {
    return this.AuthService.verifyLogic(OTP, email);
  }

  /**
   * Sample Testing Route
   */
  @Post('/hehe')
  test(@Body('email') email: string) {
    return this.AuthService.getotp(email);
  }
}
