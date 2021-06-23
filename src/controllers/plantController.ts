import { Request, Response } from "express";
import { Plant } from "../models";
import { Plant as PlantType } from "../types";

export const index = async (req: Request, res: Response) => {
  try {
      const indoor = await Plant.find({})
        .where('houseplant').equals(true);
      const outdoor = await Plant.find({})
        .where('houseplant').equals(false);
    res.status(200).json({indoor, outdoor});
  } catch (error) {
    res.status(500).json({ message: "Error in getting products" });
  }
};


