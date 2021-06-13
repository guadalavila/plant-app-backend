import { Schema, model, Document } from 'mongoose';

export interface TipDocument extends Document {
  tip: String;
  hexColor: String;
}

const TipSchema = new Schema(
  {
    tip: String,
    hexColor: String,
  }
);

export const Tip = model<TipDocument>('Tip', TipSchema);
