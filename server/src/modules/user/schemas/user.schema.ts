import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { Order } from 'src/modules/order/order.schema';
import { Product } from 'src/modules/product/schemas/product.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: false })
  isActivated: boolean;

  @Prop()
  activationLink: string;

  // @Prop({
  //   type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Role' }],
  //   required: true,
  // })
  // roles: Role[];
  @Prop({
    type: [{ type: String }],
    required: true,
  })
  roles: string[];

  @Prop({ type: String, required: true })
  name: string;

  @Prop({ type: String, required: true })
  surname: string;

  @Prop({ type: String, required: true, unique: true })
  tel: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    default: [],
  })
  orders: Order[];

  @Prop({ type: String })
  address: string;

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Product',
    default: [],
  })
  wishList: Product[];

  @Prop({
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Product',
    default: [],
  })
  cart: Product[];

  @Prop({ type: Boolean, default: false })
  mailing: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
