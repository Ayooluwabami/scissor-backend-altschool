import express, { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import urlRoutes from './src/routes/url.routes';
import authenticate from './src/middleware/authenticate';
import connectDB from './src/utils/database';
import rateLimiter from './src/middleware/rateLimiter';


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(rateLimiter);
app.use('/api/urls', authenticate, urlRoutes);

// Global error handler
app.get('/', (req, res) => {
  res.send('Welcome to Scissor URL Shortener!');
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

export default app;
