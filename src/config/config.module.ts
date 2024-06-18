import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { databaseConfig } from './db.config';
import { queueConfig } from './queue.config';

@Module({
  imports: [
    NestConfigModule.forRoot({
      load: [databaseConfig, queueConfig],
      isGlobal: true,
    }),
  ],
  exports: [NestConfigModule],
})
export class ConfigModule {}
