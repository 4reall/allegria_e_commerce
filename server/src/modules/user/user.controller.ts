import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { UserDto } from 'src/modules/user/dtos/user.dto';
import { UserService } from 'src/modules/user/services/user.service';
import { Response, Request } from 'express';
import { UserLoginDto } from 'src/modules/user/dtos/user-login.dto';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  BaseResponseDto,
  IBaseResponse,
  IFullResponse,
} from 'src/modules/user/dtos/base-response.dto';

@ApiTags('user')
@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOkResponse({
    description: 'User has been successfully created',
    type: BaseResponseDto,
  })
  @Post('/registration')
  async registration(
    @Body() userDto: UserDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<IBaseResponse> {
    return await this.userService.registration(userDto);
  }

  @ApiOkResponse({
    type: BaseResponseDto,
  })
  @Post('/login')
  async login(
    @Body() userLoginDto: UserLoginDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<IFullResponse> {
    return this.userService.login(userLoginDto);
  }

  @Post('/logout')
  async logout(
    @Req() req: Request,
    @Body() refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ): Promise<{ message: string }> {
    await this.userService.logout(refreshToken);

    return { message: 'logout succeed' };
  }

  @ApiOkResponse({
    type: BaseResponseDto,
  })
  @Post('/refresh')
  async refresh(
    @Body() body: { refreshToken: string },
    @Res({ passthrough: true }) res: Response,
  ): Promise<IBaseResponse> {
    return this.userService.refresh(body.refreshToken);
  }

  @Get('/test')
  async test() {
    return 'private route';
  }
}
