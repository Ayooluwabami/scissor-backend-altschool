import { Controller, Post, Body, Get, Param, UseGuards } from '@nestjs/common';
import { UrlService } from './url.service';
import { AuthGuard } from '../../common/guards/auth.guard';

@Controller('api/urls')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post('shorten')
  shortenUrl(@Body() body: { originalUrl: string; customUrl?: string }) {
    return this.urlService.shortenUrl(body.originalUrl, body.customUrl);
  }

  @Get(':shortUrl/analytics')
  getShortUrlAnalytics(@Param('shortUrl') shortUrl: string) {
    return this.urlService.getAnalytics(shortUrl);
  }

  @Get('history/:userId')
  @UseGuards(AuthGuard)
  getUserUrlHistory(@Param('userId') userId: string) {
    return this.urlService.getUrlHistory(userId);
  }
}
