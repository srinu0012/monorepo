import { db } from "../../../config/db.js";
import { ProductType } from "shared";

interface CountType {
  count: number;
}

export const getProductByIdRepo = async (id: number) => {
  return db.oneOrNone(`SELECT * FROM products WHERE id = $1`, [id]);
};

export const getProductsRepo = async (
  limit: number,
  skip: number
): Promise<ProductType[]> => {
  return db.manyOrNone(
    `SELECT * FROM products ORDER BY id LIMIT $/limit/ OFFSET $/skip/ `,
    { limit, skip }
  );
};

export const getProductsCount = async (): Promise<CountType> => {
  return db.one("SELECT COUNT(*) FROM products");
};
