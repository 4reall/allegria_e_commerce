import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/modules/user/dtos/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/modules/user/schemas/user.schema';
import { Model } from 'mongoose';
import { Role, RoleDocument } from 'src/modules/role/role.schema';
import { TokenService } from 'src/modules/user/services/token.service';
import { compare, hash } from 'bcrypt';
import { v4 } from 'uuid';
import { UserTokenDto } from 'src/modules/user/dtos/user-token.dto';
import { UserLoginDto } from 'src/modules/user/dtos/user-login.dto';
import {
  IBaseResponse,
  IFullResponse,
  IMessageResponse,
  IUserResponse,
} from 'src/modules/user/dtos/responses.dto';
import { ServerException } from 'src/share/exceptions/server.exception';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
    private tokenService: TokenService,
  ) {}

  transformToUserResponse(user: UserDocument): IUserResponse {
    return {
      name: user.name,
      surname: user.surname,
      tel: user.tel,
      isActivated: user.isActivated,
      address: user.address,
      roles: user.roles,
    };
  }

  async registration(createUserDto: UserDto): Promise<IMessageResponse> {
    const candidate = await this.userModel
      .findOne()
      .or([{ email: createUserDto.email }, { tel: createUserDto.tel }]);

    if (candidate) {
      throw ServerException.Exist('User already exists');
    }

    const hashedPassword = await hash(createUserDto.password, 3);
    const activationLink = v4();
    await this.userModel.create({
      ...createUserDto,
      password: hashedPassword,
      activationLink,
      roles: ['user'],
    });

    return { message: 'Successful registration' };
  }

  async login(userLoginDto: UserLoginDto): Promise<IFullResponse> {
    const { email, password } = userLoginDto;
    const user = await this.userModel.findOne({
      email,
    });
    if (!user) {
      throw ServerException.NotFound('user has not found');
    }

    const isPassEqual = await compare(password, user.password);
    if (!isPassEqual) {
      throw ServerException.Invalid('invalid password');
    }

    const userTokenDto = new UserTokenDto(user);
    const accessToken = this.tokenService.generateAccessToken({
      ...userTokenDto,
    });
    const refreshToken = this.tokenService.generateRefreshToken({
      ...userTokenDto,
    });

    await this.tokenService.save(userTokenDto.userId, refreshToken);

    return {
      accessToken,
      refreshToken,
      user: this.transformToUserResponse(user),
    };
  }

  async logout(refreshToken: string): Promise<IMessageResponse> {
    await this.tokenService.deleteToken(refreshToken);
    return { message: 'Successful logout' };
  }

  async refresh(refreshToken: string): Promise<IBaseResponse> {
    const tokenPayload = this.tokenService.validateRefreshToken(refreshToken);
    const tokenFromDb = await this.tokenService.findToken(refreshToken);

    if (!tokenPayload || !tokenFromDb) {
      throw ServerException.NotFound();
    }

    const user = await this.userModel.findOne({ _id: tokenFromDb.userId });
    const userTokenDto = new UserTokenDto(user);
    const accessToken = this.tokenService.generateAccessToken({
      ...userTokenDto,
    });

    return { accessToken, user: this.transformToUserResponse(user) };
  }
}
