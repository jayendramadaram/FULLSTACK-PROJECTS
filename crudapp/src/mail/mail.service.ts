import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
// import { User } from '../../src/auth/entities/user.entity';

/**
 * SendGrid Email SMTP server Configured and serving .hbs file as Email Templete By passing Arguments
 */
@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(OTP: number, email: string) {
    // const url = `example.com/auth/confirm?token=${token}`;
    console.log();
    await this.mailerService.sendMail({
      to: email,
      subject: 'Welcome to Nice App! Confirm your Email',
      template: './confirmation',
      context: {
        OTP: OTP,
      },
    });
  }
}
