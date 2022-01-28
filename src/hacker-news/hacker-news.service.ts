import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { HackerNews } from './interfaces/hacker-news.interface';
import { CreatedHackernewsDto } from './dto/hacker-news.dto';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { AxiosResponse } from '@nestjs/terminus/dist/health-indicator/http/axios.interfaces';

@Injectable()
export class HackerNewsService {
  BASE_URL = 'https://hn.algolia.com/api/v1/search_by_date?query=nodejs';
  constructor(
    @InjectModel('HackerNews')
    private readonly hackerNewsModel: Model<HackerNews>,
    private readonly httpService: HttpService,
  ) {}

  findall(): Observable<AxiosResponse<any>> {
    return this.httpService.get(this.BASE_URL);
  }

  async create(
    createdHackernewsDto: CreatedHackernewsDto,
  ): Promise<HackerNews> {
    const createdHackernews = new this.hackerNewsModel(createdHackernewsDto);
    return await createdHackernews.save();
  }
  async gethackernews(): Promise<HackerNews[]> {
    return await this.hackerNewsModel.find();
  }
  async findOne(id: string): Promise<HackerNews> {
    return await this.hackerNewsModel.findOne({ title: id });
  }
  async delete(id: any): Promise<HackerNews> {
    return await this.hackerNewsModel.findByIdAndRemove(id);
  }
}
