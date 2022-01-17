import { Controller, HttpStatus } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { CreatedHackernewsDto } from './dto/hacker-news.dto';
import { HackerNewsService } from './hacker-news.service';
import { Res } from '@nestjs/common';

@Controller('hacker-news')
export class HackerNewsController {
  constructor(private readonly hackerNewsService: HackerNewsService) {}
  @Get('/api-hnews')
  async getApiData() {
    const { data } = await this.hackerNewsService.findall().toPromise();
    const { hits } = data;
    //recorrer todos los hits
    for (const item of hits) {
      if (item.story_title !== null && item.story_url !== null) {
        const createdHackernewsDto: CreatedHackernewsDto = {
          title: item.story_title,
          url: item.story_url,
          author: item.author,
          created_at: item.created_at,
        };
        const hackerNews1 = await this.hackerNewsService.findOne(
          item.story_title,
        );
        if (hackerNews1 === null) {
          const hackerNews = await this.hackerNewsService.create(
            createdHackernewsDto,
          );
        }
      }
      if (item.title !== null && item.url !== null) {
        const createdHackernewsDto: CreatedHackernewsDto = {
          title: item.title,
          url: item.url,
          author: item.author,
          created_at: item.created_at,
        };
        const hackerNews1 = await this.hackerNewsService.findOne(item.title);
        if (hackerNews1 === null) {
          const hackerNews = await this.hackerNewsService.create(
            createdHackernewsDto,
          );
        }
      }
    }
    const hackerNews = await this.hackerNewsService.gethackernews();
    return hackerNews;
  }
  @Get('/hacker-newsver')
  async getApiDataVer() {
    const hackerNews = await this.hackerNewsService.gethackernews();
    return hackerNews;
  }
}
