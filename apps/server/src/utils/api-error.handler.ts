class ApiError extends Error {
  public readonly status: string;
  public readonly statusCode: number;
  public readonly isOperational: boolean;

  constructor(message: string, statusCode: number) {
    super(message);
    this.statusCode = statusCode;
    this.status =
      statusCode >= 400 && statusCode <= 499 ? "fail" : "internal server error";
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

export default ApiError;
