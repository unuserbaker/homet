import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { HelloService } from './hello.service';
import { CacheInterceptor, CacheKey } from '@nestjs/cache-manager';

@Controller('hello')
@UseInterceptors(CacheInterceptor)
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get()
  @CacheKey('HelloCache')
  getHello(): string {
    return this.helloService.getHello();
  }
}
