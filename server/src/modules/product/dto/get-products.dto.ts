import { IsEnum, IsIn, IsNumber, IsOptional, IsString } from 'class-validator';
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
  @Transform(({ value }) => (value === '1' || value === '-1' ? +value : value))
  @IsIn([1, -1, 'asc', 'desc'])
  @IsOptional()
  readonly orderBy?: 1 | -1 | 'asc' | 'desc' = -1;

  @ApiPropertyOptional({
    type: String,
    description:
      'Param accepts "relevance" or "price" values, -1 orderBy value shows new products first',
  })
  @IsOptional()
  @IsString()
  @Transform(({ value }) => value.toLowerCase())
  @IsIn(['relevance', 'price'])
  readonly sortBy?: string = 'relevance';

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
