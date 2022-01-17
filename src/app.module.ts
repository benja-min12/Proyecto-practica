import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { ApiHnewsController } from './api-hnews/controller/api-hnews.controller';
import { ApiRequestService } from './api-hnews/services/api-request.service';
import { HackerNewsModule } from './hacker-news/hacker-news.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HackerNewsController } from './hacker-news/hacker-news.controller';
import { HackerNewsService } from './hacker-news/hacker-news.service';

@Module({
  imports: [
    TerminusModule,
    HttpModule,
    HackerNewsModule,
    MongooseModule.forRoot('mongodb://localhost/hacker-news', {
      useNewUrlParser: true,
    }),
    HackerNewsModule,
  ],
  controllers: [AppController, ApiHnewsController],
  providers: [AppService, ApiRequestService],
})
export class AppModule {}
