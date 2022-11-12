import { Module } from '@nestjs/common';
import { OrderService } from 'src/modules/order/order.service';
import { OrderController } from 'src/modules/order/order.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from 'src/modules/order/order.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
  ],
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}
