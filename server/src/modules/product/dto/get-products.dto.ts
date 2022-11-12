import {
  IsAlpha,
  IsArray,
  IsEnum,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { Sizes } from 'src/modules/product/constants';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetProductsDto {
  @ApiPropertyOptional({ enum: Sizes })
  @IsString()
  @IsOptional()
  @IsEnum(Sizes)
  @Transform(({ value }) => value.toUpperCase())
  readonly size?: Sizes;

  @ApiPropertyOptional({
    type: String,
    description:
      'Param accepts one of these values: 1 or "asc" for ascending order and -1 or "desc" for descending order',
  })
  @IsString()
  @IsOptional()
  readonly orderBy?: '1' | '-1' | 'asc' | 'desc' = '1';

  @ApiPropertyOptional({
    type: String,
    description: 'Param accepts "new" or "old" values',
  })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  @IsIn(['new', 'old'])
  readonly relevance?: string = 'new';

  @ApiPropertyOptional({
    type: Number,
    description:
      'Param accepts two values: first - min price, second - max price, separated by comma',
    example: 'price=10,100',
  })
  @IsOptional()
  @Transform(({ value }) => value.split(',').map((val) => +val))
  @IsArray()
  @IsNumber({}, { each: true })
  readonly price?: number[] = [];

  @ApiPropertyOptional({ type: String })
  @IsString()
  @IsOptional()
  @IsAlpha()
  readonly color?: string;

  @ApiPropertyOptional({ type: String })
  @IsString()
  @IsOptional()
  readonly q?: string;
}
