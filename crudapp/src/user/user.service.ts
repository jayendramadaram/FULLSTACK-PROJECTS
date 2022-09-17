import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditUser } from 'src/Typings';
import * as argon from 'argon2';
@Injectable()
export class UserService {
  constructor(private postgre: PrismaService, private config: ConfigService) {}

  async editUser(User: EditUser, dbuser: any) {
    if (User.password) {
      const hash = await argon.hash(User.password);
      delete User.password;
      const user = await this.postgre.user.update({
        where: {
          id: dbuser.id,
        },
        data: {
          ...User,
          pw: hash,
        },
      });
      delete user.pw;
      return user;
    } else {
      const user = await this.postgre.user.update({
        where: {
          id: dbuser.id,
        },
        data: {
          ...User,
        },
      });
      delete user.pw;
      return user;
    }
  }
  //   GetInfo
}
