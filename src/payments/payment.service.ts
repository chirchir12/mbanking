import { Injectable } from '@nestjs/common';
import { TransactionRepository } from '../database/repositories/transaction.repository';
import { CreatePaymentRequestDto } from './dtos/create_payment_request.dto';

@Injectable()
export class PaymentService {
  constructor(private readonly repository: TransactionRepository) {}

  async create(params: CreatePaymentRequestDto) {
    return this.repository.save({ ...params, status: 'pending' });
  }

  async get(id: number) {
    return this.repository.findOne({ where: { id } });
  }
}
