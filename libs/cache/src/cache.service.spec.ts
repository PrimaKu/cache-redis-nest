import { Test, TestingModule } from '@nestjs/testing';
import { CacheService } from './cache.service';

describe('CacheService', () => {
  let service: CacheService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CacheService],
    }).compile();

    service = module.get<CacheService>(CacheService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should missed', async () => {
    await service.delete('article_list');
    const articleList = await service.get('article_list');

    expect(articleList).toEqual(null);
  });

  it('should cached', async () => {
    await service.set('article_list', { articles: [] });
    const articleList = await service.get('article_list');

    expect(articleList).not.toEqual(null);
  });
});
