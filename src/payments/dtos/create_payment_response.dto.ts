import { ApiProperty } from '@nestjs/swagger';

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
}
