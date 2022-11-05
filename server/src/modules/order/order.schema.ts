import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import mongoose from 'mongoose';
import * as dayjs from 'dayjs';
import { User } from 'src/modules/user/schemas/user.schema';
import { Variant } from 'src/modules/product/schemas/variant.schema';

export type OrderDocument = Order & Document;

@Schema()
export class Order {
  @ApiProperty({ type: [Variant], required: true })
  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Variant',
  })
  products: Variant[];

  @ApiProperty({ type: Date, required: true })
  @Prop({ required: true, default: dayjs().format('YYYY-MM-DDTHH:mmZ') })
  createdAt: string;

  @ApiProperty({ type: String, required: true })
  @Prop({ required: true })
  address: string;

  @ApiProperty({ type: [User], required: true })
  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User',
  })
  user: User[];

  @ApiProperty({ type: String, required: true })
  @Prop({ required: true })
  status: string;

  @ApiProperty({ type: String, required: true })
  @Prop({ required: true })
  deliveryMethod: string;

  @ApiProperty({ type: String, required: true })
  @Prop({ required: true })
  paymentMethod: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
