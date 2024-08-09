import { Request } from 'express';

declare module 'express-serve-static-core' {
  interface Request {
    user?: {
      id: string;
      // Add other user properties as needed
    };
  }
}
