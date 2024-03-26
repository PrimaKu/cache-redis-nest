import { DynamicModule, Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { REDIS_OPTIONS } from './cache.constant';
import { RedisClientOptions } from 'cache-redis-node';

@Module({})
export class CacheModule {
  static register(options: RedisClientOptions): DynamicModule {
    return {
      global: true,
      module: CacheModule,
      providers: [
        {
          provide: REDIS_OPTIONS,
          useValue: options,
        },
        CacheService,
      ],
      exports: [CacheService],
    };
  }
}
