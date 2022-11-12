import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/modules/user/schemas/user.schema';
import { UserService } from 'src/modules/user/services/user.service';
import { UserController } from 'src/modules/user/user.controller';
import { HttpModule } from '@nestjs/axios';
import { Role, RoleSchema } from 'src/modules/role/role.schema';
import { Order, OrderSchema } from 'src/modules/order/order.schema';
import { TokenService } from 'src/modules/user/services/token.service';
import { Token, TokenSchema } from 'src/modules/user/schemas/token.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Role.name, schema: RoleSchema },
      { name: Order.name, schema: OrderSchema },
      { name: Token.name, schema: TokenSchema },
    ]),
    HttpModule,
  ],
  controllers: [UserController],
  providers: [UserService, TokenService],
})
export class UserModule {}
