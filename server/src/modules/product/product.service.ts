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

type ProductsInfo = {
  categories: string[];
  brands: string[];
  colors: {
    hex: string;
    name: string;
  }[];
};

export type ProductsResponse = {
  totalCount: number;
  products: Product[];
};

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async getProducts(getProductsDto: GetProductsDto): Promise<ProductsResponse> {
    const { sizes, orderBy, price, relevance, colors, q, page, limit } =
      getProductsDto;

    const validPrice =
      price.length > 0 ? { $gte: price[0], $lte: price[1] } : undefined;
    const validColors = colors
      ? { $in: colors.map((color) => new RegExp(`${color}`, 'im')) }
      : undefined;
    const validQuery = q ? new RegExp(q, 'im') : undefined;
    const validSizes = sizes ? { $in: sizes } : undefined;

    return {
      totalCount: await this.productModel.count(),
      products: await this.productModel
        .find({
          name: validQuery,
          'price.value': validPrice,
          'variants.color.name': validColors,
          'variants.size': validSizes,
        })
        .sort({
          'relevance.value': relevance === 'new' ? -1 : 1,
          price: orderBy as SortOrder,
        })
        .skip((page - 1) * limit)
        .limit(limit),
    };
  }

  async getProduct(id: string): Promise<Product> {
    return this.productModel.findOne({ _id: id });
  }

  async getInfo(): Promise<ProductsInfo> {
    const products = await this.productModel.find();
    const categories = new Set();
    const brands = new Set();
    const colors = new Map();
    products.forEach((product) => {
      if (!categories.has(product.category)) categories.add(product.category);
      if (!brands.has(product.brand)) brands.add(product.brand);
      product.variants.forEach((variant) => {
        if (!colors.has(variant.color.name))
          colors.set(variant.color.name, variant.color);
      });
    });
    return {
      categories: Array.from(categories) as ProductsInfo['categories'],
      brands: Array.from(brands) as ProductsInfo['brands'],
      colors: Array.from(colors.values()) as ProductsInfo['colors'],
    };
  }

  async _uploadResource() {
    const productsPath = path.join(process.cwd(), 'src/assets/products.json');
    const products = fs.readFileSync(productsPath, 'utf-8');
    return await this.productModel.insertMany(JSON.parse(products));
  }
}
