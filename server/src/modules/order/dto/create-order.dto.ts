import { ApiProperty } from '@nestjs/swagger';
import * as dayjs from 'dayjs';
import {
  IsDateString,
  IsMongoId,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CartItemDto } from 'src/modules/order/dto/cart-item.dto';
import mongoose from 'mongoose';

export class CreateOrderDto {
  @ApiProperty({ type: [CartItemDto], required: true })
  @Type(() => CartItemDto)
  @ValidateNested({ each: true })
  products: CartItemDto[];

  @ApiProperty({ type: Date })
  @IsDateString()
  createdAt: string = dayjs().format('YYYY-MM-DDTHH:mmZ');

  @ApiProperty({ type: String, required: true })
  @IsString()
  address: string;

  @ApiProperty({ type: mongoose.Schema.Types.ObjectId, required: true })
  @IsMongoId()
  user: mongoose.Schema.Types.ObjectId;

  @ApiProperty({ type: String, required: true })
  @IsString()
  status: string;

  @ApiProperty({ type: String, required: true })
  @IsString()
  deliveryMethod: string;

  @ApiProperty({ type: String, required: true })
  @IsString()
  paymentMethod: string;
}
