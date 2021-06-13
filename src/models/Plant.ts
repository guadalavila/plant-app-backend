import { Schema, model, Document } from 'mongoose';

export interface PlantDocument extends Document {
  code: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  stock: boolean;
  houseplant: boolean;
}

const PlantSchema = new Schema(
  {
    code: String,
    name: String,
    description: String,
    imageUrl: String,
    price: Number,
    stock: Boolean,
    houseplant: Boolean,
  },
  {
    timestamps: true,
  }
);

export const Plant = model<PlantDocument>('Plant', PlantSchema);
