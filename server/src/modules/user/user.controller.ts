import { Body, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { UserDto } from 'src/modules/user/dtos/user.dto';
import { UserService } from 'src/modules/user/services/user.service';
import { Response, Request } from 'express';
import { UserLoginDto } from 'src/modules/user/dtos/user-login.dto';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/registration')
  async registration(
    @Body() userDto: UserDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { user, ...tokens } = await this.userService.registration(userDto);
    // res.cookie('refreshToken', userData.tokens.refreshToken, {
    //   httpOnly: true,
    //   maxAge: 30 * 24 * 60 * 60 * 1000,
    // });
    return { user, ...tokens };
  }

  @Post('/login')
  async login(
    @Body() userLoginDto: UserLoginDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    const { user, ...tokens } = await this.userService.login(userLoginDto);
    // res.cookie('refreshToken', userData.tokens.refreshToken, {
    //   httpOnly: true,
    //   maxAge: 30 * 24 * 60 * 60 * 1000,
    // });
    return { user, ...tokens };
  }

  @Post('/logout')
  async logout(
    @Req() req: Request,
    @Body() refreshToken: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    // const refreshToken = req.cookies['refreshToken'];
    await this.userService.logout(refreshToken);
    // res.clearCookie('refreshToken');
    return { message: 'logout succeed' };
  }

  @Post('/refresh')
  async refresh(
    @Req() req: Request,
    @Body() body: { refreshToken: string },
    @Res({ passthrough: true }) res: Response,
  ) {
    // const refreshToken = req.cookies['refreshToken'];
    // console.log(refreshToken);
    console.log(body.refreshToken);

    const userData = await this.userService.refresh(body.refreshToken);
    // res.cookie('refreshToken', userData.tokens.refreshToken, {
    //   httpOnly: true,
    //   maxAge: 30 * 24 * 60 * 60 * 1000,
    // });
    // console.log(userData);
    return { user: userData.user, accessToken: userData.accessToken };
  }

  @Get('/test')
  async test() {
    return 'private route';
  }
}
