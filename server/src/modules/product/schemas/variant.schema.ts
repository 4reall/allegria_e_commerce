import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema()
export class Variant {
  @ApiProperty({
    type: {
      name: { type: String, required: true },
      hex: { type: String },
    },
    required: true,
  })
  @Prop({
    type: {
      name: { type: String, required: true },
      hex: { type: String, required: true },
    },
    _id: false,
    required: true,
  })
  color: { hex: string; name: string };

  @ApiProperty({
    type: String,
    required: true,
  })
  @Prop({ type: String, required: true })
  size: string;

  @ApiProperty({
    type: Number,
    required: true,
  })
  @Prop({ required: true, default: 0 })
  stock: number;
}

export const VariantSchema = SchemaFactory.createForClass(Variant);
