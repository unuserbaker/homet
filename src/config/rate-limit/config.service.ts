import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RateLimitConfigService {
  constructor(private configService: ConfigService) {}

  get title(): number {
    return this.configService.get<number>('rate-limit.limit') ?? 500;
  }
  get description(): number {
    return this.configService.get<number>('rate-limit.ttl') ?? 100;
  }
  get version(): number {
    return this.configService.get<number>('rate-limit.blockDuration') ?? 100;
  }
}
