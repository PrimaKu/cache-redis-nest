import { Injectable } from '@nestjs/common';
import Cache from 'cache-redis';

@Injectable()
export class CacheService {
  private cache: Cache;

  constructor() {
    this.cache = new Cache();
    this.cache.init();
  }

  set(key: string, data: object) {
    return this.cache.set(key, data);
  }

  get(key: string) {
    return this.cache.get(key);
  }

  delete(key: string) {
    return this.cache.del(key);
  }
}
