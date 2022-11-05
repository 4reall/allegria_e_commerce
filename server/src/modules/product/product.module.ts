import { Module } from '@nestjs/common';
import { ProductController } from 'src/modules/product/product.controller';
import { ProductService } from 'src/modules/product/product.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Product,
  ProductSchema,
} from 'src/modules/product/schemas/product.schema';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    HttpModule,
  ],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
