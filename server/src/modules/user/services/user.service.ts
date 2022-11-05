import {
  BadRequestException,
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
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

interface BaseResponse {
  user: UserDocument;
  accessToken: string;
}
interface FullResponse {
  user: UserDocument;
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Role.name) private roleModel: Model<RoleDocument>,
    private tokenService: TokenService,
  ) {}

  async registration(createUserDto: UserDto): Promise<FullResponse> {
    const userCandidate = await this.userModel.findOne({
      email: createUserDto.email,
    });
    if (userCandidate) {
      throw new ConflictException('user already exists');
    }

    const hashedPassword = await hash(createUserDto.password, 3);
    const activationLink = v4();
    const userRole = await this.roleModel.findOne({ value: 'user' });
    const user = new this.userModel({
      ...createUserDto,
      password: hashedPassword,
      activationLink,
      roles: [userRole],
    });

    const userTokenDto = new UserTokenDto(user);
    const accessToken = this.tokenService.generateAccessToken({
      ...userTokenDto,
    });
    const refreshToken = this.tokenService.generateRefreshToken({
      ...userTokenDto,
    });
    await this.tokenService.save(userTokenDto.userId, refreshToken);
    await user.save();
    return { accessToken, refreshToken, user };
  }

  async login(userLoginDto: UserLoginDto): Promise<FullResponse> {
    const { email, password } = userLoginDto;
    const user = await this.userModel.findOne({
      email,
    });
    if (!user) {
      throw new BadRequestException('user has not found');
    }

    const isPassEqual = await compare(password, user.password);
    if (!isPassEqual) {
      throw new BadRequestException('invalid password');
    }

    const userTokenDto = new UserTokenDto(user);
    const accessToken = this.tokenService.generateAccessToken({
      ...userTokenDto,
    });
    const refreshToken = this.tokenService.generateRefreshToken({
      ...userTokenDto,
    });
    await this.tokenService.save(userTokenDto.userId, refreshToken);
    return { accessToken, refreshToken, user };
  }

  async logout(refreshToken: string): Promise<void> {
    await this.tokenService.deleteToken(refreshToken);
  }

  async refresh(refreshToken: string): Promise<BaseResponse> {
    if (!refreshToken) {
      throw new UnauthorizedException();
    }
    console.log(refreshToken);
    const tokenPayload = this.tokenService.validateRefreshToken(refreshToken);
    console.log('validation\n', tokenPayload);
    const tokenFromDb = await this.tokenService.findToken(refreshToken);
    console.log('db\n', tokenFromDb);
    if (!tokenPayload || !tokenFromDb) {
      throw new UnauthorizedException();
    }
    const user = await this.userModel.findOne({ _id: tokenFromDb.userId });
    const userTokenDto = new UserTokenDto(user);
    const accessToken = this.tokenService.generateAccessToken({
      ...userTokenDto,
    });
    return { accessToken, user };
  }
}
