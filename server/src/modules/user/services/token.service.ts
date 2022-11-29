import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserTokenDto } from 'src/modules/user/dtos/user-token.dto';
import * as jwt from 'jsonwebtoken';
import { InjectModel } from '@nestjs/mongoose';
import { Token, TokenDocument } from 'src/modules/user/schemas/token.schema';
import { Model } from 'mongoose';
import { verify } from 'jsonwebtoken';

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token.name) private tokenModel: Model<TokenDocument>,
  ) {}

  generateRefreshToken(userTokenDto: UserTokenDto) {
    return jwt.sign(userTokenDto, process.env.JWT_REFRESH_KEY, {
      expiresIn: '30d',
    });
  }

  generateAccessToken(userTokenDto: UserTokenDto) {
    return jwt.sign(userTokenDto, process.env.JWT_ACCESS_KEY, {
      expiresIn: '30m',
    });
  }

  async save(userId: string, refreshToken: string) {
    const candidateToken = await this.tokenModel.findOne({ userId });
    if (candidateToken) {
      candidateToken.refreshToken = refreshToken;
      return candidateToken.save();
    }
    return this.tokenModel.create({ userId, refreshToken });
  }

  async deleteToken(refreshToken: string): Promise<void> {
    await this.tokenModel.deleteOne({ refreshToken });
  }

  validateAccessToken(accessToken: string) {
    try {
      return verify(accessToken, process.env.JWT_ACCESS_KEY) as
        | string
        | UserTokenDto;
    } catch (e) {
      throw new UnauthorizedException('access token expired');
    }
  }
  validateRefreshToken(accessToken: string) {
    try {
      return verify(accessToken, process.env.JWT_REFRESH_KEY) as
        | string
        | UserTokenDto;
    } catch (e) {
      throw new UnauthorizedException('refresh token expired');
    }
  }
  async findToken(refreshToken: string): Promise<TokenDocument> {
    return this.tokenModel.findOne({ refreshToken });
  }
}
