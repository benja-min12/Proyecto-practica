import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TerminusModule } from '@nestjs/terminus';
import { HttpModule } from '@nestjs/axios';
import { HackerNewsModule } from './hacker-news/hacker-news.module';
import { MongooseModule } from '@nestjs/mongoose';
import { HackerNewsController } from './hacker-news/hacker-news.controller';
import { HackerNewsService } from './hacker-news/hacker-news.service';
import { ConfigModule, ConfigService} from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot(),
    TerminusModule,
    HttpModule,
    HackerNewsModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
      }),
      inject: [ConfigService],
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
