import { Module } from '@nestjs/common';
import { SavedPostService } from './saved-post.service';
import { SavedPostController } from './saved-post.controller';

@Module({
  providers: [SavedPostService],
  controllers: [SavedPostController]
})
export class SavedPostModule {}
