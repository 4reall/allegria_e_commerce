import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ApiProperty } from '@nestjs/swagger';

@Schema({ _id: false })
export class Variant {
  @ApiProperty({
    type: {
      name: { type: String, required: true },
      rgb: { type: String },
    },
    required: true,
  })
  @Prop({
    type: {
      name: { type: String, required: true },
      rgb: { type: String },
    },
    _id: false,
    required: true,
  })
  color: Record<string, any>;

  @ApiProperty({
    type: String,
    required: true,
  })
  @Prop({ type: String, required: true })
  size: string;

  @ApiProperty({
    type: String,
    required: true,
  })
  @Prop({ required: true, default: 0 })
  stock: number;
}

export const VariantSchema = SchemaFactory.createForClass(Variant);
