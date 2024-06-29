import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { NotificationService } from './notification.service';
import { PaymentService } from './payment.service';
import { Transaction } from '../database/entities/transaction.entity';
import { Logger } from '@nestjs/common';

@Processor('process.payment')
export class QueueConsumer {
  private logger: Logger = new Logger(QueueConsumer.name);
  constructor(
    private readonly notification: NotificationService,
    private readonly paymentService: PaymentService,
  ) {}
  @Process({ concurrency: 500 })
  async process(job: Job<any>) {
    const { transaction } = job.data;

    this.logger.log(`Start Processing transaction ${transaction.transferId}`);

    // simulate user activity
    const result = await this.notification.notify();
    if (result.status === 'ok') {
      // complete payment
      transaction.status = 'completed';
    } else {
      // fail payment
      transaction.status = 'failed';
    }
    this.logger.log(`Completed Processing transaction ${transaction.id}`);
    await this.paymentService.update(transaction);
    return {};
  }
}
