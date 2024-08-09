import Url from '../models/url.model';
import generateQrCode from '../utils/generateQrCode';

export const shortenUrlService = async (originalUrl: string, customUrl?: string) => {
  const shortUrl = customUrl || generateShortUrl();
  const qrCodeUrl = await generateQrCode(shortUrl); // Generate QR code for the shortened URL

  const newUrl = new Url({ longUrl: originalUrl, shortUrl, qrCodeUrl }); // Save QR code URL along with shortened URL
  await newUrl.save();
  return { shortUrl, qrCodeUrl };
};

export const getUrlHistory = async (userId: string) => {
  return await Url.find({ userId });
};

const generateShortUrl = () => {
  return Math.random().toString(36).substring(2, 8);
};
