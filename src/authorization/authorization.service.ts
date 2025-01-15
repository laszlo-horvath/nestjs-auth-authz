import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthorizationService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly jwtService: JwtService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.databaseService.findByUsername(username);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    if (user.password === password) {
      const payload = { sub: user.id, username: user.username };
      const jwt = this.jwtService.sign(payload);
      return {
        accessToken: jwt,
      };
    } else {
      throw new UnauthorizedException('invalid credentials');
    }
  }
}
