import { registerAs } from '@nestjs/config';

export const queueConfig = registerAs('queues', () => ({
  redis: {
    port: Number(process.env.REDIS_PORT),
    host: process.env.REDIS_HOST,
  },
}));
