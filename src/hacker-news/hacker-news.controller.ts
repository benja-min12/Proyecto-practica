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
    //mostrar solo los hits que tienen story_url y story_title
    const hitsFiltrados = hits.filter(
      (item) => item.story_url && item.story_title,
    );
    //recorrer los hits filtrados
    for (const item of hitsFiltrados) {
      const createdHackernewsDto: CreatedHackernewsDto = {
        title: item.story_title,
        url: item.story_url,
        author: item.author,
        created_at: item.created_at,
      };
      //verificar si existe el registro
      const existe = await this.hackerNewsService.findOne(item.story_title);
      if (!existe) {
        //crear el registro
        await this.hackerNewsService.create(createdHackernewsDto);
      }
    }
    //mostrar solo los hits que tienen title y url
    const hitsFiltrados2 = hits.filter((item) => item.title && item.url);
    //recorrer los hits filtrados
    for (const item of hitsFiltrados2) {
      const createdHackernewsDto: CreatedHackernewsDto = {
        title: item.title,
        url: item.url,
        author: item.author,
        created_at: item.created_at,
      };
      //verificar si existe el registro
      const existe = await this.hackerNewsService.findOne(item.title);
      if (!existe) {
        //crear el registro
        await this.hackerNewsService.create(createdHackernewsDto);
      }
    }
    //mostrar solo los hits que tienen title y story_url
    const hitsFiltrados3 = hits.filter((item) => item.title && item.story_url);
    //recorrer los hits filtrados
    for (const item of hitsFiltrados3) {
      const createdHackernewsDto: CreatedHackernewsDto = {
        title: item.title,
        url: item.story_url,
        author: item.author,
        created_at: item.created_at,
      };
      //verificar si existe el registro
      const existe = await this.hackerNewsService.findOne(item.title);
      if (!existe) {
        //crear el registro
        const hackerNews = await this.hackerNewsService.create(
          createdHackernewsDto,
        );
      }
    }
    //mostrar solo los hits que tienen url y story_title
    const hitsFiltrados4 = hits.filter((item) => item.url && item.story_title);
    //recorrer los hits filtrados
    for (const item of hitsFiltrados4) {
      const createdHackernewsDto: CreatedHackernewsDto = {
        title: item.story_title,
        url: item.url,
        author: item.author,
        created_at: item.created_at,
      };
      //verificar si existe el registro
      const existe = await this.hackerNewsService.findOne(item.title);
      if (!existe) {
        //crear el registro
        const hackerNews = await this.hackerNewsService.create(
          createdHackernewsDto,
        );
      }
    }
    const hackerNewsver = await this.hackerNewsService.gethackernews();
    return hackerNewsver;
  }
  @Get('/hacker-newsver')
  async getApiDataVer() {
    const hackerNews = await this.hackerNewsService.gethackernews();
    return hackerNews;
  }
}
