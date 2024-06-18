import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { Transaction } from '../database/entities/transaction.entity';

@Injectable()
export class QueueProducer {
  constructor(@InjectQueue('process.payment') private paymentQueue: Queue) {}

  async add(transaction: Transaction) {
    await this.paymentQueue.add({ transaction });
  }
}
