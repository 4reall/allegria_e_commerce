import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserDto } from 'src/modules/user/dtos/user.dto';
import { UserService } from 'src/modules/user/services/user.service';
import { Response, Request } from 'express';
import { UserLoginDto } from 'src/modules/user/dtos/user-login.dto';
import { ApiBody, ApiOkResponse, ApiTags, PickType } from '@nestjs/swagger';
import {
  BaseResponseDto,
  FullResponseDto,
  IBaseResponse,
  IFullResponse,
  IMessageResponse,
  MessageResponseDto,
} from 'src/modules/user/dtos/responses.dto';
import { RefreshDto } from 'src/modules/user/dtos/refresh.dto';
import { AuthGuard } from 'src/modules/user/auth.guard';

@ApiTags('user')
@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @ApiOkResponse({
    description: 'User has been successfully created',
    type: MessageResponseDto,
  })
  @Post('/registration')
  async registration(
    @Body() userDto: UserDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<IMessageResponse> {
    return await this.userService.registration(userDto);
  }

  @ApiOkResponse({ type: FullResponseDto })
  @Post('/login')
  async login(
    @Body() userLoginDto: UserLoginDto,
    @Res({ passthrough: true }) res: Response,
  ): Promise<IFullResponse> {
    return this.userService.login(userLoginDto);
  }

  @ApiBody({ type: RefreshDto })
  @ApiOkResponse({ type: MessageResponseDto })
  @Post('/logout')
  async logout(
    @Req() req: Request,
    @Body() refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ): Promise<IMessageResponse> {
    await this.userService.logout(refreshToken);

    return { message: 'logout succeed' };
  }

  @ApiBody({ type: RefreshDto })
  @ApiOkResponse({ type: BaseResponseDto })
  @Post('/refresh/:refreshToken')
  async refresh(
    @Param() param: { refreshToken: string },
    @Res({ passthrough: true }) res: Response,
  ): Promise<IBaseResponse> {
    return this.userService.refresh(param.refreshToken);
  }

  @UseGuards(AuthGuard)
  @Get('/test')
  async test() {
    return 'private route';
  }
}
