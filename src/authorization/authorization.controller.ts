import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';
import { JwtGuard } from './jwt.guard';

interface UserDto {
  username: string;
  password: string;
}

@Controller('auth')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  // HTTP POST /auth/login
  @Post('login')
  async login(@Body() body: UserDto) {
    return this.authorizationService.login(body.username, body.password);
  }

  @UseGuards(JwtGuard)
  @Get('profile')
  async profile(@Request() request) {
    return request.user;
  }
}

// -H "Authorization: Bearer your_jwt_token"
