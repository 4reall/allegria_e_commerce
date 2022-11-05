import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import {
  Variant,
  VariantSchema,
} from 'src/modules/product/schemas/variant.schema';
import { ApiProperty } from '@nestjs/swagger';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @ApiProperty({ type: [String] })
  @Prop([String])
  imagesUrls: string[];

  @ApiProperty({ type: [String] })
  @Prop([String])
  thumbnailsUrls: string[];

  @ApiProperty({ type: String, required: true })
  @Prop({ required: true })
  name: string;

  @ApiProperty({ type: String, required: true })
  @Prop({ required: true })
  category: string;

  @ApiProperty({ type: String, required: true })
  @Prop({ required: true })
  sex: string;

  @ApiProperty({
    type: {
      currencyIso: { type: String, required: true },
      value: { type: Number, required: true },
      salePercent: { type: Number },
    },
    required: true,
  })
  @Prop({
    type: {
      currencyIso: { type: String, required: true },
      value: { type: Number, required: true },
      salePercent: { type: Number },
    },
    required: true,
  })
  price: Record<string, any>;

  @ApiProperty({
    type: { name: { type: String }, value: { type: Number, default: 1 } },
  })
  @Prop({
    type: { name: { type: String }, value: { type: Number } },
    default: { name: 'new', value: 1 },
    _id: false,
  })
  relevance: Record<string, any>;

  @ApiProperty({ type: String, default: 'string' })
  @Prop()
  brand: string;

  @ApiProperty({ type: [Variant] })
  @Prop({ type: [VariantSchema], required: true })
  variants: [Variant];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
