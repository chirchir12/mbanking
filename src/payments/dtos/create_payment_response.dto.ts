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
  status: 'pending' | 'completed' | 'failed';

  @ApiProperty()
  createdAt: Date;

  static data(response: Transaction) {
    return {
      id: response.id,
      source: response.source,
      destination: response.destination,
      amount: response.amount,
      status: response.status,
      transferType: response.transferType,
      createdAt: response.createdAt,
    };
  }
}
