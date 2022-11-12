import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from 'src/modules/user/user.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from 'src/modules/product/product.module';
import { OrderModule } from 'src/modules/order/order.module';
import { RoleModule } from 'src/modules/role/role.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/allegria', {
      ignoreUndefined: true,
    }),
    ConfigModule.forRoot({
      envFilePath: [`.${process.env.NODE_ENV}.env`, '.env'],
    }),
    ProductModule,
    UserModule,
    OrderModule,
    RoleModule,
  ],
})
export class AppModule {}
