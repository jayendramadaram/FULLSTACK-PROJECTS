import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateBookmarkDto } from 'src/Typings/saved';

@Injectable()
export class SavedPostService {
  constructor(private prisma: PrismaService) {}

  getAllSaved(userId: number) {
    return this.prisma.savedPost.findMany({
      where: {
        Userid: userId,
      },
    });
  }

  getSavedByID(userId: number, bookmarkId: number) {
    return this.prisma.savedPost.findFirst({
      where: {
        id: bookmarkId,
        Userid: userId,
      },
    });
  }

  async creatSaved(userId: number, dto: CreateBookmarkDto) {
    const bookmark = await this.prisma.savedPost.create({
      data: {
        Userid: userId,
        ...dto,
      },
    });

    return bookmark;
  }

  async deleteBookmarkById(userId: number, savedid: number) {
    const bookmark = await this.prisma.savedPost.findUnique({
      where: {
        id: savedid,
      },
    });
    if (!bookmark || bookmark.Userid !== userId)
      throw new ForbiddenException('Access to resources denied');

    await this.prisma.savedPost.delete({
      where: {
        id: savedid,
      },
    });
  }
}
