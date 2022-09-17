import { Injectable, ForbiddenException } from '@nestjs/common';
import { AuthLogin, AuthSignup } from 'src/Typings';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private postgre: PrismaService,
    private config: ConfigService,
    private jwt: JwtService,
  ) {}

  async signupLogic(body: AuthSignup): Promise<object> {
    const hash = await argon.hash(body.password);
    try {
      const user = await this.postgre.user.create({
        data: {
          email: body.email,
          FirstName: body.Firstname,
          pw: hash,
        },
      });
      return {
        Jwt: await this.JwtSign(user.id),
      };
    } catch (error) {
      console.log('here', error.code);

      if (error.code == 'P2002') {
        return {
          message: 'Email already exists',
        };
      } else {
        return error;
      }
    }
  }

  async loginLogic(body: AuthLogin): Promise<object> {
    const { email, password } = body;

    const user = await this.postgre.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }
    const pwMatches = await argon.verify(user.pw, password);
    if (!pwMatches) throw new ForbiddenException('Credentials incorrect');

    return {
      Jwt: await this.JwtSign(user.id),
    };
  }

  async forgotLogic(): Promise<object> {
    return { hi: 'My Soldiers RAGEE' };
  }

  async verifyLogic(): Promise<object> {
    return { hi: 'My Soldiers RAGEE' };
  }

  async JwtSign(userId: number): Promise<string> {
    const payload = {
      sub: userId,
    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: secret,
    });
    return token;
  }
}
