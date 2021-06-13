import { Request, Response } from "express";
import { Plant } from "../models";

export const index = async (req: Request, res: Response) => {
  try {
    const products = await Plant.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error in getting products" });
  }
};


