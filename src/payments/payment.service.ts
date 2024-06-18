import { Injectable } from '@nestjs/common';
import { TransactionRepository } from '../database/repositories/transaction.repository';
import { CreatePaymentRequestDto } from './dtos/create_payment_request.dto';
import { Transaction } from '../database/entities/transaction.entity';

@Injectable()
export class PaymentService {
  constructor(private readonly repository: TransactionRepository) {}

  async create(params: CreatePaymentRequestDto) {
    if (!params.metadata) {
      params.metadata = {};
    }
    return this.repository.save({ ...params, status: 'pending' });
  }

  async get(id: number) {
    return this.repository.findOne({ where: { id } });
  }

  async update(params: Transaction) {
    return this.repository.save(params);
  }
}
