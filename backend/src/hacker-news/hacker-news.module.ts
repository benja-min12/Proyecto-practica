import { Module } from '@nestjs/common';
import { HackerNewsController } from './hacker-news.controller';
import { HackerNewsService } from './hacker-news.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HackerNewsSchema } from './schema/hacker-news.schema';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'HackerNews', schema: HackerNewsSchema },
    ]),
    HttpModule,
  ],
  controllers: [HackerNewsController],
  providers: [HackerNewsService],
})
export class HackerNewsModule {}
