import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthLogin {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
export class AuthSignup extends AuthLogin {
  constructor() {
    super();
  }
  @IsString()
  @IsNotEmpty()
  Firstname: string;
}
