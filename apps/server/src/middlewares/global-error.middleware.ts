import { Request, Response, NextFunction } from "express";
import ApiError from "../utils/api-error.handler";
import httpStatusCodes from "http-status-codes";
import { ZodError } from "zod";

interface ErrorResponse {
  success: false;
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
  let statusCode = httpStatusCodes.INTERNAL_SERVER_ERROR;
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
    statusCode = httpStatusCodes.BAD_REQUEST;
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
