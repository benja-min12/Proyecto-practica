import { HttpService } from '@nestjs/axios';
import { getModelToken } from '@nestjs/mongoose';
import { Test, TestingModule } from '@nestjs/testing';
import { HackerNewsController } from './hacker-news.controller';
import { HackerNewsModule } from './hacker-news.module';
import { HackerNewsService } from './hacker-news.service';

describe('HackerNewsController', () => {
  let controller: HackerNewsController;
  let hackerNewsService: HackerNewsService;
  const mockmodel = {
    find: jest.fn(),
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HackerNewsController],
      providers: [
        HackerNewsService,
        {
          provide: getModelToken('HackerNews'),
          useValue: jest.fn(),
        },
        {
          provide: HttpService,
          useValue: {
            get: jest.fn(),
          },
        },
      ],
    }).compile();
    controller = module.get<HackerNewsController>(HackerNewsController);
    hackerNewsService = module.get<HackerNewsService>(HackerNewsService);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

 describe('getApiDataVer', () => {
  it('should return an array of objects', async () => {
    const result= await controller.getApiDataVer();
    expect(result).toBeDefined();
 });
})
});
