import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { NextFunction, Request } from 'express';
import { TokenService } from 'src/modules/user/services/token.service';
import { UserDto } from 'src/modules/user/dtos/user.dto';
import { UserTokenDto } from 'src/modules/user/dtos/user-token.dto';

export interface ExtendedRequest extends Request {
  user: UserTokenDto;
}

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private tokenService: TokenService) {}

  use(req: ExtendedRequest, res: Response, next: NextFunction) {
    try {
      console.log('middleware');
      const authHeader = req.headers.authorization;
      if (!authHeader) {
        console.log(authHeader);

        return next(new UnauthorizedException());
      }

      const accessToken = authHeader.split(' ')[1];
      if (!accessToken) {
        console.log(accessToken);

        return next(new UnauthorizedException());
      }

      const payload = this.tokenService.validateAccessToken(accessToken);
      if (!payload) {
        console.log(payload);
        return next(new UnauthorizedException());
      }

      req.user = payload as UserTokenDto;
      next();
    } catch (e) {
      console.log(e);
      return next(new UnauthorizedException());
    }
  }
}
