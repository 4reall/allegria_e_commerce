import { Controller, Get, Param, Query } from '@nestjs/common';
import {
  ProductService,
  ProductsResponse,
} from 'src/modules/product/product.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from 'src/modules/product/schemas/product.schema';
import { GetProductsDto } from 'src/modules/product/dto/get-products.dto';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @ApiOperation({ summary: 'allow you get products' })
  @ApiResponse({ status: 200, type: [Product] })
  @Get()
  async getProducts(
    @Query() createUserDto: GetProductsDto,
  ): Promise<ProductsResponse> {
    return this.productService.getProducts(createUserDto);
  }

  @Get('info')
  async getInfo() {
    return this.productService.getInfo();
  }

  @Get('_upload')
  async uploadResource() {
    return this.productService._uploadResource();
  }

  @ApiOperation({ summary: 'allow you get product' })
  @ApiResponse({ status: 200, type: Product })
  @Get(':id')
  async getProduct(@Param('id') id: string): Promise<Product> {
    return this.productService.getProduct(id);
  }
}
