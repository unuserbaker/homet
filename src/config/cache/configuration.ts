import { registerAs } from '@nestjs/config';

export default registerAs('cache', () => ({
  isGlobal: process.env.CACHE_IS_GLOBAL,
  ttl: process.env.CACHE_TTL,
  max: process.env.CACHE_MAX_ITEM,
}));
