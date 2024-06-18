import { ApiProperty } from '@nestjs/swagger';
import { Transaction } from '../../database/entities/transaction.entity';

export class CreatePaymentResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  source: number;

  @ApiProperty()
  destination: number;

  @ApiProperty()
  amount: number;

  @ApiProperty()
  transferType: string;

  @ApiProperty()
  transferId: string;

  @ApiProperty()
  metadata: Record<string, any>;

  @ApiProperty()
  status: 'pending' | 'completed' | 'failed';

  @ApiProperty()
  createdAt: Date;

  static data(entity: Transaction) {
    const transaction = new this();
    transaction.amount = entity.amount;
    (transaction.id = entity.id), (transaction.createdAt = entity.createdAt);
    transaction.destination = entity.destination;
    transaction.source = entity.source;
    transaction.transferType = entity.transferType;
    transaction.status = entity.status;
    transaction.metadata = entity.metadata;
    transaction.transferId = entity.transferId;
    return transaction;
  }
}
