import { Inject, Injectable } from '@nestjs/common';
import { Cache, CacheKeys } from 'cache-redis';
import { REDIS_OPTIONS } from './cache.constant';
import { RedisClientOptions } from 'redis';

@Injectable()
export class CacheService {
  private cache: Cache;

  constructor(@Inject(REDIS_OPTIONS) redisOptions: RedisClientOptions) {
    this.cache = new Cache(redisOptions);
  }

  set(key: string | CacheKeys, data: object) {
    return this.cache.set(key, data);
  }

  get(key: string | CacheKeys) {
    return this.cache.get(key);
  }

  delete(key: string | CacheKeys) {
    return this.cache.del(key);
  }
}
