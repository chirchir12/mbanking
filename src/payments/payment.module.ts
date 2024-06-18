import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { DatabaseModule } from '../database/database.module';
import { BullModule } from '@nestjs/bull';
import { ConfigService } from '@nestjs/config';
import { ConfigModule } from '../config/config.module';
import { QueueConsumer } from './queue.consumer';
import { NotificationService } from './notification.service';
import { QueueProducer } from './queue.producer';

@Module({
  imports: [
    BullModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        redis: configService.get('queues.redis'),
      }),
    }),

    BullModule.registerQueue({
      name: 'process.payment',
      defaultJobOptions: {
        removeOnComplete: true,
        removeOnFail: true,
        attempts: 5,
      },
    }),
  ],
  exports: [PaymentService],
  providers: [
    PaymentService,
    NotificationService,
    QueueProducer,
    QueueConsumer,
  ],
  controllers: [PaymentController],
})
export class PaymentModule {}
