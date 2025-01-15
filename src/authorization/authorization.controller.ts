import { Controller, Post } from '@nestjs/common';
import { AuthorizationService } from './authorization.service';

@Controller('auth')
export class AuthorizationController {
  constructor(private readonly authorizationService: AuthorizationService) {}

  @Post('login')
  async login() {
    return this.authorizationService.login();
  }
}
