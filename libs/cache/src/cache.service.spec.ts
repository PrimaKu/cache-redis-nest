import { Test, TestingModule } from '@nestjs/testing';
import { CacheService } from './cache.service';
import { REDIS_OPTIONS } from './cache.constant';
import { CacheKeys, RedisClientOptions } from 'cache-redis-node';

describe('CacheService', () => {
  let service: CacheService;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: REDIS_OPTIONS,
          useValue: {
            database: 3,
          } as RedisClientOptions,
        },
        CacheService,
      ],
    }).compile();

    service = module.get<CacheService>(CacheService);
  });
  
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  
  it('should missed', async () => {
    await service.delete(CacheKeys.RECOMMENDED_ARTICLE_LIST);
    const articleList = await service.get(CacheKeys.RECOMMENDED_ARTICLE_LIST);

    expect(articleList).toEqual(null);
  });

  it('should cached', async () => {
    await service.set(CacheKeys.RECOMMENDED_ARTICLE_LIST, { articles: [] });
    const articleList = await service.get(CacheKeys.RECOMMENDED_ARTICLE_LIST);

    expect(articleList).not.toEqual(null);
  });
});
