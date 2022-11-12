import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsDefined,
  IsEnum,
  IsHexColor,
  IsMongoId,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { Sizes } from 'src/modules/product/constants';
import mongoose from 'mongoose';

class ColorDto {
  @IsDefined()
  @IsString()
  name: string;

  @IsDefined()
  @IsHexColor()
  rgb: string;
}

export class CartItemDto {
  @ApiProperty({
    type: {
      name: { type: String, required: true },
      rgb: { type: String },
    },
    required: true,
  })
  @IsDefined()
  @ValidateNested()
  @Type(() => ColorDto)
  color: ColorDto;

  @IsDefined()
  @IsMongoId()
  productId: mongoose.Schema.Types.ObjectId;

  @ApiPropertyOptional({ enum: Sizes, required: true })
  @IsString()
  @IsOptional()
  @IsEnum(Sizes)
  @Transform(({ value }) => value.toUpperCase())
  readonly size: Sizes;

  @ApiProperty({
    type: Number,
    required: true,
  })
  @IsDefined()
  @IsNumber()
  amount: number;
}
