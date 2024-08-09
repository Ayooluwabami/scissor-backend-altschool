import { Schema, model } from 'mongoose';

interface IUrl {
  longUrl: string;
  shortUrl: string;
  qrCodeUrl: string;
  userId: string; 
}

const urlSchema = new Schema<IUrl>({
  longUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
  qrCodeUrl: { type: String, required: true }, 
  userId: { type: String, required: true },
});

const Url = model<IUrl>('Url', urlSchema);

export default Url;
