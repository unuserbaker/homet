import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class CacheConfigService {
  constructor(private configService: ConfigService) {}

  get isGlobal(): boolean {
    return this.configService.get<boolean>('cache.isGlobal') ?? true;
  }

  get ttl(): number {
    return this.configService.get<number>('cache.ttl') ?? 5000;
  }

  get max(): number {
    return this.configService.get<number>('cache.max') ?? 100;
  }
}
