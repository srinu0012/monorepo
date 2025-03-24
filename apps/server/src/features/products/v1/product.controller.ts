import { Request, Response } from "express";
import {
  getProductByIdService,
  getProductsService,
} from "./product.service.js";
import httpStatusCodes from "http-status-codes";
import { limitAndSkipSchema, productIdSchema } from "./product.types.js";
import {
  productIdSchemaType,
  limitAndSkipSchemaType,
} from "./product.types.js";

export const getProductByIdHandler = async (req: Request, res: Response) => {
  const { id }: productIdSchemaType = productIdSchema.parse(req.params);
  const result = await getProductByIdService(id);
  res.status(httpStatusCodes.OK).json(result);
};

export const getProductsHandler = async (req: Request, res: Response) => {
  const { limit, skip }: limitAndSkipSchemaType = limitAndSkipSchema.parse(
    req.query
  );
  const result = await getProductsService(limit, skip);
  res.status(httpStatusCodes.OK).json(result);
};
