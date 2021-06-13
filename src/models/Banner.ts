import { Schema, model, Document } from 'mongoose';

export interface BannerDocument extends Document {
  name: String;
  imageUrl: String;
  description: String;
}

const BannerSchema = new Schema(
  {
    name: String,
    imageUrl: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

export const Banner = model<BannerDocument>('Banner', BannerSchema);
