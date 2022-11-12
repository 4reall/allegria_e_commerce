import { Body, Controller, Post } from '@nestjs/common';
import { CreateOrderDto } from 'src/modules/order/dto/create-order.dto';

@Controller('order')
export class OrderController {
  constructor() {}
  @Post()
  createOrder(@Body() createOrderDto: CreateOrderDto) {
    // console.log(createOrderDto);
    console.log(createOrderDto);
    return createOrderDto;
  }
}
