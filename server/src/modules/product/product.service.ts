import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Product,
  ProductDocument,
} from 'src/modules/product/schemas/product.schema';
import { Model, SortOrder } from 'mongoose';
import { HttpService } from '@nestjs/axios';
import * as fs from 'fs';
import * as path from 'path';
import { GetProductsDto } from 'src/modules/product/dto/get-products.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getProducts(getProductsDto: GetProductsDto): Promise<Product[]> {
    const { size, orderBy, price, relevance, color, q } = getProductsDto;

    const validPrice =
      price.length > 0 ? { $gte: price[0], $lte: price[1] } : undefined;
    const validColor = color ? new RegExp(`${color}`, 'i') : undefined;
    const validQuery = q ? new RegExp(q, 'im') : undefined;

    return this.productModel
      .find({
        name: validQuery,
        'price.value': validPrice,
        'variants.color.name': validColor,
        'variants.size': size,
      })
      .sort({
        'relevance.value': relevance === 'new' ? -1 : 1,
        price: orderBy as SortOrder,
      });
  }

  async getProduct(id: string): Promise<Product> {
    return this.productModel.findOne({ _id: id });
  }

  async _uploadResource() {
    const productsPath = path.join(process.cwd(), 'src/assets/products.json');
    const products = fs.readFileSync(productsPath, 'utf-8');
    return await this.productModel.insertMany(JSON.parse(products));
  }
}
