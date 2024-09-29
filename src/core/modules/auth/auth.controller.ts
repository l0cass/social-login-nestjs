import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  @Get()
  async getHello() {
    return { message: 'Hello world!' };
  }

  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubLogin() {}

  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  async githubCallback(@Req() request: any) {
    return request.user;
  }

  // @Get('google')
  // @UseGuards(AuthGuard('google'))
  // async googleLogin() {}

  // @Get('google/callback')
  // @UseGuards(AuthGuard('google'))
  // async googleCallback(@Req() request: any) {
  //   return request.user;
  // }
}
