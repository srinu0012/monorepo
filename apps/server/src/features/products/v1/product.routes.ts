import { Router } from "express";
import {
  getProductByIdHandler,
  getProductsHandler,
} from "./product.controller.js";

const router = Router();

router.get("/", getProductsHandler);
router.get("/:id", getProductByIdHandler);

export default router;
