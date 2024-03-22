import { CacheKeys, RedisClientOptions } from 'cache-redis';
export declare class CacheService {
    private cache;
    constructor(redisOptions: RedisClientOptions);
    set(key: string | CacheKeys, data: object): Promise<void>;
    get(key: string | CacheKeys): Promise<any>;
    delete(key: string | CacheKeys): Promise<void>;
}
