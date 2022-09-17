import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { CreateBookmarkDto } from 'src/Typings/saved';
import { SavedPostService } from './saved-post.service';

@UseGuards(AuthGuard('jwt'))
@Controller('saved-post')
export class SavedPostController {
  constructor(private Saved: SavedPostService) {}

  @Get()
  getBookmarks(@Req() req: any) {
    console.log(req.user);

    return this.Saved.getAllSaved(req.user.id);
  }

  @Get(':id')
  getBookmarkById(@Req() req: any, @Param('id', ParseIntPipe) savedid: number) {
    return this.Saved.getSavedByID(req.user.id, savedid);
  }

  @Post()
  createBookmark(@Req() req: any, @Body() dto: CreateBookmarkDto) {
    return this.Saved.creatSaved(req.user.id, dto);
  }

  @Delete(':id')
  deleteBookmarkById(
    @Req() req: any,
    @Param('id', ParseIntPipe) savedid: number,
  ) {
    return this.Saved.deleteBookmarkById(req.user.id, savedid);
  }
}
