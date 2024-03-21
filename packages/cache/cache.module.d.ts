import { DynamicModule } from '@nestjs/common';
import { RedisClientOptions } from 'redis';
export declare class CacheModule {
    static register(options: RedisClientOptions): DynamicModule;
}
