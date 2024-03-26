"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var CacheModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CacheModule = void 0;
const common_1 = require("@nestjs/common");
const cache_service_1 = require("./cache.service");
const cache_constant_1 = require("./cache.constant");
let CacheModule = CacheModule_1 = class CacheModule {
    static forRoot(options) {
        return {
            global: true,
            module: CacheModule_1,
            providers: [
                {
                    provide: cache_constant_1.REDIS_OPTIONS,
                    useValue: options,
                },
                cache_service_1.CacheService,
            ],
            exports: [cache_service_1.CacheService],
        };
    }
};
exports.CacheModule = CacheModule;
exports.CacheModule = CacheModule = CacheModule_1 = __decorate([
    (0, common_1.Module)({})
], CacheModule);
//# sourceMappingURL=cache.module.js.map