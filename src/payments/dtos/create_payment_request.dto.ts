import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePaymentRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  source: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  destination: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  amount: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsIn(['accountToAccount', 'walletToAccount'])
  transferType: string;
}
