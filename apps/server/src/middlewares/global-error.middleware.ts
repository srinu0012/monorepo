import { Request, Response, NextFunction } from "express";
import ApiError from "../utils/api-error.handler.js";
import { StatusCodes } from "http-status-codes";
import { ZodError } from "zod";

interface ErrorResponse {
  success: boolean;
  statusCode: number;
  error: {
    message: string;
    details: { path: string; message: string }[];
  };
}

const globalErrorHandler = (
  err: ApiError | ZodError | Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let statusCode = StatusCodes.INTERNAL_SERVER_ERROR;
  let response: ErrorResponse = {
    success: false,
    statusCode,
    error: {
      message: "Internal Server Error",
      details: [],
    },
  };

  if (err instanceof ApiError) {
    statusCode = err.statusCode;
    response = {
      success: false,
      statusCode,
      error: {
        message: err.message,
        details: [],
      },
    };
  }

  if (err instanceof ZodError) {
    statusCode = StatusCodes.BAD_REQUEST;
    response = {
      success: false,
      statusCode,
      error: {
        message: "Validation Error",
        details: err.errors.map((e) => ({
          path: e.path.join("."),
          message: e.message,
        })),
      },
    };
  }

  res.status(statusCode).json(response);
};

export default globalErrorHandler;
