import {
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

export class JwtGuard implements CanActivate {
  constructor(private readonly jwtService: JwtService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    console.log('token', token);

    if (!token) {
      throw new UnauthorizedException('no token found');
    }

    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: 'myVerySecureSecret',
      });

      request['user'] = payload;
    } catch (error) {
        console.error('jwt validation', error);
      throw new UnauthorizedException('faild to validate token');
    }

    return true;
  }

  // auth header: Bearer 'sadsa';dsa'd;21321312k3asdasd
  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}
