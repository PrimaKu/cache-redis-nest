import { DynamicModule } from '@nestjs/common';
import { RedisClientOptions } from 'cache-redis-node';
export declare class CacheModule {
    static register(options: RedisClientOptions): DynamicModule;
}
