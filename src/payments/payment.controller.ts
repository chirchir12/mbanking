import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Logger,
  Param,
  Post,
} from '@nestjs/common';
import { PaymentService } from './payment.service';
import { CreatePaymentRequestDto } from './dtos/create_payment_request.dto';
import { CreatePaymentResponseDto } from './dtos/create_payment_response.dto';
import { ApiAcceptedResponse, ApiBody } from '@nestjs/swagger';
import { QueueProducer } from './queue.producer';

@Controller({ version: '1' })
export class PaymentController {
  private logger: Logger = new Logger(PaymentController.name);

  constructor(
    private readonly paymentService: PaymentService,
    private readonly queue: QueueProducer,
  ) {}

  @Post('payments/initiate')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiBody({ type: CreatePaymentRequestDto })
  @ApiAcceptedResponse({ type: CreatePaymentResponseDto })
  async create(
    @Body() body: CreatePaymentRequestDto,
  ): Promise<CreatePaymentResponseDto> {
    const result = await this.paymentService.create(body);
    this.logger.log(`adding transaction ${result.id} to the queue`);
    await this.queue.add(result);
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
