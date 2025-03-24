import { Request, Response } from "express";
import ApiError from "../utils/api-error.handler";
import httpStatusCodes from "http-status-codes";

export const notFoundHandler = async (req: Request, _res: Response) => {
  throw new ApiError(
    `Can't find ${req.originalUrl} on the server!`,
    httpStatusCodes.NOT_FOUND
  );
};
