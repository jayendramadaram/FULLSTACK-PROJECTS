import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

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
  FirstName: string;
}

export class EditUser {
  @IsEmail()
  @IsOptional()
  email: string;
  @IsString()
  @IsOptional()
  password: string;
  @IsString()
  @IsOptional()
  FirstName: string;
}
