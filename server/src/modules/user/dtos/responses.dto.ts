import { User } from 'src/modules/user/schemas/user.schema';
import { OmitType, PickType } from '@nestjs/swagger';

export interface IBaseResponse {
  accessToken: string;
  user: UserResponseDto;
}

export interface IFullResponse extends IBaseResponse {
  refreshToken: string;
}

export interface IMessageResponse {
  message: string;
}

export type IUserResponse = Pick<
  User,
  'surname' | 'name' | 'isActivated' | 'roles' | 'address' | 'tel'
>;

const UserResponse = PickType(User, [
  'surname',
  'name',
  'isActivated',
  'roles',
  'address',
  'tel',
]);

export class UserResponseDto extends UserResponse implements IUserResponse {}

export class BaseResponseDto implements IBaseResponse {
  accessToken: string;
  user: UserResponseDto;
}

export class FullResponseDto extends BaseResponseDto implements IFullResponse {
  refreshToken: string;
}

export class MessageResponseDto implements IMessageResponse {
  message: string;
}
