import { ApiProperty } from '@nestjs/swagger';
import {
  IsIn,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
} from 'class-validator';

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
  @IsUUID()
  transferId: string;

  @ApiProperty()
  @IsOptional()
  @IsNotEmpty()
  metadata: Record<string, any>;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @IsIn(['accountToAccount', 'walletToAccount'])
  transferType: string;
}
