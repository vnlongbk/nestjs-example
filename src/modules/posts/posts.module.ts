import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { postsProviders } from './post.providers';

@Module({
  providers: [PostsService, ...postsProviders],
  controllers: [PostsController],
})
export class PostsModule {}
