import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

// Define the Url document type
export type UrlDocument = Url & Document;

@Schema()
export class Url {
  @Prop({ required: true })
  longUrl?: string;

  @Prop({ required: true })
  shortUrl?: string;

  @Prop({ required: true })
  qrCodeUrl?: string;

  @Prop({ required: true })
  userId?: string;
}

// Create the schema for the Url model
export const UrlSchema = SchemaFactory.createForClass(Url);
