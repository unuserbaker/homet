import { registerAs } from '@nestjs/config';

export default registerAs('rate-limit', () => ({
  limit: process.env.RL_LIMIT,
  ttl: process.env.RL_TTL,
  blockDuration: process.env.RL_BLOCKDURATION,
}));
