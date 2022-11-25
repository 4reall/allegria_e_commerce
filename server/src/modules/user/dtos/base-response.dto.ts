import { User } from 'src/modules/user/schemas/user.schema';

export interface IBaseResponse {
  accessToken: string;
  user: User;
}

export interface IFullResponse {
  refreshToken: string;
  accessToken: string;
  user: User;
}

export class BaseResponseDto implements IBaseResponse {
  accessToken: string;
  user: User;
}

export class FullResponseDto extends BaseResponseDto implements IFullResponse {
  refreshToken: string;
}
