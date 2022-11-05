import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ProductService } from 'src/modules/product/product.service';
import { ApiOperation, ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { Product } from 'src/modules/product/schemas/product.schema';
import { GetProductsDto } from 'src/modules/product/dto/get-products.dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @ApiOperation({ summary: 'allow you get products' })
  @ApiResponse({ status: 200, type: [Product] })
  @Get()
  async getProducts(
    @Query() createUserDto: GetProductsDto,
  ): Promise<Product[]> {
    return this.productService.getProducts(createUserDto);
  }

  @ApiOperation({ summary: 'allow you get product' })
  @ApiResponse({ status: 200, type: Product })
  @Get(':id')
  async getProduct(@Param('id') id: string): Promise<Product> {
    return this.productService.getProduct(id);
  }

  @Get('/_upload')
  async uploadResource() {
    const products = await this.productService._uploadResource();
    return products;
  }
}
