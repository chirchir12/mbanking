import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentRequestDto } from './dtos/create_payment_request.dto';
import { CreatePaymentResponseDto } from './dtos/create_payment_response.dto';
import { ApiAcceptedResponse, ApiBody } from '@nestjs/swagger';

@Controller({ version: '1' })
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  @Post('payments/initiate')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiBody({ type: CreatePaymentRequestDto })
  @ApiAcceptedResponse({ type: CreatePaymentResponseDto })
  async create(
    @Body() body: CreatePaymentRequestDto,
  ): Promise<CreatePaymentResponseDto> {
    const createdPayment = await this.paymentService.create(body);
    return {
      id: createdPayment.id,
      source: createdPayment.source,
      destination: createdPayment.destination,
      amount: createdPayment.amount,
      status: createdPayment.status,
      transferType: createdPayment.transferType,
      createdAt: createdPayment.createdAt,
    };
  }
}
