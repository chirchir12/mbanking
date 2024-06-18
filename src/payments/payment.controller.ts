import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
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
    const result = await this.paymentService.create(body);
    return CreatePaymentResponseDto.data(result);
  }

  @Get('/payments/status/:id')
  @HttpCode(HttpStatus.OK)
  @ApiAcceptedResponse({ type: CreatePaymentResponseDto })
  async get(@Param('id') id: number) {
    const result = await this.paymentService.get(id);
    return CreatePaymentResponseDto.data(result);
  }
}
