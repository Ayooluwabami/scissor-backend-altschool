import { Request, Response } from 'express';
import { shortenUrlService, getUrlHistory } from '../services/url.service';

export const shortenUrl = async (req: Request, res: Response) => {
  try {
    const { originalUrl, customUrl } = req.body;
    const { shortUrl, qrCodeUrl } = await shortenUrlService(originalUrl, customUrl); 
    res.status(201).json({ shortUrl, qrCodeUrl });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

export const getShortUrlAnalytics = async (req: Request, res: Response) => {
  try {
    const { shortUrl } = req.params;
    // Your logic for getting analytics
    res.status(200).json({ analytics: 'analytics data here' });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};

export const getUserUrlHistory = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }
    const history = await getUrlHistory(req.user.id);
    res.status(200).json(history);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(400).json({ message: 'An unknown error occurred' });
    }
  }
};
