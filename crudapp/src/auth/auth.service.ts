import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  async signupLogic(body: any): Promise<string> {
    console.log('here is your body', body);

    return 'My Soldiers RAGEE';
  }

  async loginLogic(): Promise<string> {
    return 'My Soldiers RAGEE';
  }
  async forgotLogic(): Promise<string> {
    return 'My Soldiers RAGEE';
  }
  async verifyLogic(): Promise<string> {
    return 'My Soldiers RAGEE';
  }
}
