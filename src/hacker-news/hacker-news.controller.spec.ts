import { Test, TestingModule } from '@nestjs/testing';
import { HackerNewsController } from './hacker-news.controller';
import { HackerNewsService } from './hacker-news.service';

describe('HackerNewsController', () => {
  let controller: HackerNewsController;

  const mockHackerNewsService = {};
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HackerNewsController],
      providers: [HackerNewsService],
    })
      .overrideProvider(HackerNewsService)
      .useValue(mockHackerNewsService)
      .compile();

    controller = module.get<HackerNewsController>(HackerNewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
