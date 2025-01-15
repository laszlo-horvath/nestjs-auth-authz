import { NestMiddleware } from '@nestjs/common';
import { Request } from 'express';

export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: any, next: (error?: Error | any) => void) {
    console.log(`${req.method} ${req.url}`);
    next();
}
}
