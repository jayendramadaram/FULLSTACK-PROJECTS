import {
  Injectable,
  ForbiddenException,
  Inject,
  CACHE_MANAGER,
} from '@nestjs/common';
import { AuthLogin, AuthSignup } from 'src/Typings';
import * as argon from 'argon2';
import { PrismaService } from 'src/prisma/prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Cache } from 'cache-manager';

@Injectable()
export class AuthService {
  constructor(
    private postgre: PrismaService,
    private config: ConfigService,
    private jwt: JwtService,
    @Inject(CACHE_MANAGER) private cachemanager: Cache,
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

  async forgotLogic(email): Promise<object> {
    console.log(email);
    const user = await this.postgre.user.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new ForbiddenException('Credentials incorrect');
    }

    const OTP = Math.floor(Math.random() * 1000000);
    await this.cachemanager.set(email, OTP);
    await this.SendEmail(OTP);
    return { message: 'done' };
  }

  async verifyLogic(OTP: any, email: string): Promise<object> {
    const cacheotp = await this.cachemanager.get(email);
    // console.log(cacheotp, OTP, 'check yourself');
    if (!cacheotp) {
      throw new ForbiddenException('Session Expired or Not created');
    }
    if (OTP == cacheotp) {
      const user = await this.postgre.user.findUnique({
        where: {
          email: email,
        },
      });
      await this.cachemanager.del(email);
      return {
        Jwt: await this.JwtSign(user.id),
      };
    } else {
      throw new ForbiddenException('Wrong Otp Enterred');
    }
  }

  async getotp(email) {
    return await this.cachemanager.get(email);
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

  async SendEmail(OTP: number) {}
}
