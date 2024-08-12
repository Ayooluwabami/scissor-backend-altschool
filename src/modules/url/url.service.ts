import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Url, UrlDocument } from './url.model';
import generateQrCode from '../../common/utils/generate-qrcode';

@Injectable()
export class UrlService {
  constructor(@InjectModel(Url.name) private urlModel: Model<UrlDocument>) {}

  async shortenUrl(originalUrl: string, customUrl?: string) {
    const shortUrl = customUrl || this.generateShortUrl();
    const qrCodeUrl = await generateQrCode(shortUrl);
    const newUrl = new this.urlModel({ longUrl: originalUrl, shortUrl, qrCodeUrl });
    await newUrl.save();
    return { shortUrl, qrCodeUrl };
  }

  async getAnalytics(shortUrl: string) {
    // Implementation for analytics
  }

  async getUrlHistory(userId: string) {
    return this.urlModel.find({ userId });
  }

  private generateShortUrl() {
    return Math.random().toString(36).substring(2, 8);
  }
}
