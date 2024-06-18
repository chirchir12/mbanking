import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { PaymentModule } from './payments/payment.module';

@Module({
  imports: [ConfigModule, DatabaseModule, PaymentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
