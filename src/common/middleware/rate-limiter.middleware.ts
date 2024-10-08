import { Injectable, NestMiddleware } from '@nestjs/common';
import rateLimit from 'express-rate-limit';

@Injectable()
export class RateLimiterMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    rateLimit({
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP to 100 requests per windowMs
      message: process.env.RATE_LIMIT_MESSAGE ?? 'Too many requests, please try again later.',
    })(req, res, next);
  }
}
