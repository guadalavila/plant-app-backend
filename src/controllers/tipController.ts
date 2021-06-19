import { Request, Response } from 'express';
import {Tip} from "../models";

export const index = async (req: Request, res: Response) => {
    try {
      const tips = await Tip.find();
      res.status(200).json(tips);
    } catch (error) {
      res
        .status(500)
        .json({ message: 'Error in Get Tip', success: false });
    }
  };
  