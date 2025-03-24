import ApiError from "../../../utils/api-error.handler.js";
import {
  getProductByIdRepo,
  getProductsCount,
  getProductsRepo,
} from "./product.repo.js";
import httpStatusCodes from "http-status-codes";

export const getProductByIdService = async (id: number) => {
  const result = await getProductByIdRepo(id);
  if (!result)
    throw new ApiError(
      `Product with ${id} not found`,
      httpStatusCodes.NOT_FOUND
    );
  return result;
};

export const getProductsService = async (limit: number, skip: number) => {
  const products = await getProductsRepo(limit, skip);
  const total = await getProductsCount();
  const result = {
    products,
    total: total.count,
    limit,
    skip,
  };
  return result;
};
