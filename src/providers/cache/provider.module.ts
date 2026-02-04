import { Module } from '@nestjs/common';
import { CacheModule, CacheModuleAsyncOptions } from '@nestjs/cache-manager';
import { CacheConfigModule } from 'src/config/cache/config.module';
import { CacheConfigService } from 'src/config/cache/config.service';

@Module({
  imports: [
    CacheModule.registerAsync({
      imports: [CacheConfigModule],
      useFactory: (cacheConfigService: CacheConfigService) => ({
        isGlobal: cacheConfigService.isGlobal,
        ttl: cacheConfigService.ttl,
        max: cacheConfigService.max,
      }),
      inject: [CacheConfigService],
    } as CacheModuleAsyncOptions),
  ],
})
export class CacheProviderModule {}
