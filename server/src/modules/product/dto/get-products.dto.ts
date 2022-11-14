import {
  IsAlpha,
  IsArray,
  IsEnum,
  IsIn,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { Sizes } from 'src/modules/product/constants';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetProductsDto {
  @ApiPropertyOptional({ enum: Sizes })
  @IsOptional()
  @IsEnum(Sizes, {
    each: true,
  })
  @Transform(({ value }) => value.toUpperCase().split(','))
  readonly sizes?: Sizes[];

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
  @IsNumber({}, { each: true })
  readonly price?: number[] = [];

  @ApiPropertyOptional({ type: String })
  @IsOptional()
  @IsString({ each: true })
  @Transform(({ value }) => value.toUpperCase().split(','))
  readonly colors?: string[];

  @ApiPropertyOptional({ type: String })
  @IsString()
  @IsOptional()
  readonly q?: string;

  @ApiPropertyOptional({ type: Number })
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  readonly page?: number = 1;

  @ApiPropertyOptional({ type: Number })
  @IsNumber()
  @Type(() => Number)
  @IsOptional()
  readonly limit?: number = 10;
}
