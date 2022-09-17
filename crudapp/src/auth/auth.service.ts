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
import { MailService } from 'src/mail/mail.service';

/**
 * ### Controller For Auth related Jobs
 * @constructor construstor is initiated with 4 Services
 *  - PrismaService for inserting and QUering UserData from `Postgres`
 *  - Config Servce for extracting Values [Jwt Secret] from `.env`
 *  - JwtService for Signing `Jwt` with UserID
 *  - CACHA_MANAGER for redis supprt to store OTP with `ttl`
 */
@Injectable()
export class AuthService {
  constructor(
    private postgre: PrismaService,
    private config: ConfigService,
    private jwt: JwtService,
    @Inject(CACHE_MANAGER) private cachemanager: Cache,
    private mailService: MailService,
  ) {}

  /**
   * Using argon2 a better version of SHA to Hash the passwords
   * and Creating User Object all edge cases are handled by Prisma and Nestjs
   */
  async signupLogic(body: AuthSignup): Promise<object> {
    const hash = await argon.hash(body.password);
    try {
      const user = await this.postgre.user.create({
        data: {
          email: body.email,
          FirstName: body.FirstName,
          pw: hash,
        },
      });
      return {
        Jwt: await this.JwtSign(user.id),
      };
    } catch (error) {
      console.log('here', error.code);

      if (error.code == 'P2002') {
        throw new ForbiddenException('Credentials Already Taken');
      } else {
        return error;
      }
    }
  }

  /**
   * Finding User , Verfifying Password with Argon2 and signing Jwt
   */
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

  /**
   * Forgot PassWord Logic Generating Random OTP Followed By
   * Storing it in Redis and Emailing the User His Otp
   */
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
    await this.mailService.sendUserConfirmation(OTP, email);
    return { message: 'done' };
  }

  /**
   * Verify Otp Logic Where OTP is retrieved From Redis and verfied
   * returns JWT
   */
  async verifyLogic(OTP: any, email: string): Promise<object> {
    const cacheotp = await this.cachemanager.get(email);
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

  /**
   * Signing JWT with SecretKey with `15m` expiry
   */
  async JwtSign(userId: number): Promise<string> {
    const payload = {
      sub: userId,
    };
    const secret = this.config.get('JWT_SECRET');
    const token = await this.jwt.signAsync(payload, {
      expiresIn: '1d',
      secret: secret,
    });
    return token;
  }
}
