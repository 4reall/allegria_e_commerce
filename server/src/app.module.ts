import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/allegria', {
      ignoreUndefined: true,
    }),
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    ProductModule,
    UserModule,
  ],
})
export class AppModule {}
