import { DynamicModule, Module } from '@nestjs/common';
import { CacheService } from './cache.service';
import { RedisClientOptions } from 'redis';
import { REDIS_OPTIONS } from './cache.constant';

@Module({})
export class CacheModule {
  static register(options: RedisClientOptions): DynamicModule {
    return {
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
