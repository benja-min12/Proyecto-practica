import { Test, TestingModule } from '@nestjs/testing';
import { HackerNewsService } from './hacker-news.service';
import { getModelToken } from '@nestjs/mongoose';
import { HttpService } from '@nestjs/axios';
import { CreatedHackernewsDto } from './dto/hacker-news.dto';


describe('HackerNewsService', () => {
  let service: HackerNewsService;

  const mockmodel = {
    find: jest.fn(),
  }
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HackerNewsService,{
        provide: getModelToken('HackerNews'),
        useValue: mockmodel,
      },
      {
        provide: HttpService,
        useValue: {
          get: jest.fn(),
        },
      }
    ],
     
      }).compile();

    service = module.get<HackerNewsService>(HackerNewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  
});
