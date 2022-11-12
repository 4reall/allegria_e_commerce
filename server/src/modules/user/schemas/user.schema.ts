import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';
import * as mongoose from 'mongoose';
import { Role } from 'src/modules/role/role.schema';
import { Order } from 'src/modules/order/order.schema';
import { Product } from 'src/modules/product/schemas/product.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty({ type: String, required: true })
  @Prop({ required: true, unique: true })
  email: string;

  @ApiProperty({ type: String, required: true })
  @Prop({ required: true })
  password: string;

  @ApiProperty({ type: Boolean, default: false })
  @Prop({ default: false })
  isActivated: boolean;

  @ApiProperty({ type: String })
  @Prop()
  activationLink: string;

  @ApiProperty({ type: [Role], required: true })
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }],
    required: true,
  })
  roles: Role[];

  @ApiProperty({ type: String, required: true })
  @Prop({ type: String, required: true })
  name: string;

  @ApiProperty({ type: String, required: true })
  @Prop({ type: String, required: true })
  surname: string;

  @ApiProperty({ type: String, required: true })
  @Prop({ type: String, required: true, unique: true })
  tel: string;

  @ApiProperty({ type: [Order], required: true })
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    default: [],
  })
  orders: Order[];

  @ApiProperty({ type: String })
  @Prop({ type: String })
  address: string;

  @ApiProperty({ type: [Product], required: true })
  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Product',
    default: [],
  })
  wishList: Product[];

  @ApiProperty({ type: [Product], required: true })
  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Product',
    default: [],
  })
  cart: Product[];

  @ApiProperty({ type: Boolean })
  @Prop({ type: Boolean, default: false })
  mailingSubscription: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
