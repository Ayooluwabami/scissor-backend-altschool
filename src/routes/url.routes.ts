import { Router } from 'express';
import { shortenUrl, getShortUrlAnalytics, getUserUrlHistory } from '../controllers/url.controller';
import authenticate from '../middleware/authenticate';

const router = Router();

router.post('/shorten', authenticate, shortenUrl);
router.get('/analytics/:shortUrl', authenticate, getShortUrlAnalytics);
router.get('/history', authenticate, getUserUrlHistory);

export default router;
