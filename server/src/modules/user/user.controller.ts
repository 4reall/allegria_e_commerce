import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { UserDto } from 'src/modules/user/dtos/user.dto';
import { UserService } from 'src/modules/user/services/user.service';
import { Response, Request } from 'express';
import { UserLoginDto } from 'src/modules/user/dtos/user-login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/registration')
  async registration(
    @Body() userDto: UserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { user, ...tokens } = await this.userService.registration(userDto);
    return { user, ...tokens };
  }

  @Post('/login')
  async dlogin(
    @Body() userLoginDto: UserLoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.userService.login(userLoginDto);
  }

  @Post('/logout')
  async logout(
    @Req() req: Request,
    @Body() refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.userService.logout(refreshToken);
    return { message: 'logout succeed' };
  }

  @Post('/refresh')
  async refresh(
    @Body() body: { refreshToken: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.userService.refresh(body.refreshToken);
  }

  @Get('/test')
  async test() {
    return 'private route';
  }
}
