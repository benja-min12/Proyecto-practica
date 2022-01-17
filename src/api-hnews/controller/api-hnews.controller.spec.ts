import { Test, TestingModule } from '@nestjs/testing';
import { ApiHnewsController } from './api-hnews.controller';

describe('ApiHnewsController', () => {
  let controller: ApiHnewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApiHnewsController],
    }).compile();

    controller = module.get<ApiHnewsController>(ApiHnewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
