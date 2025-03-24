import express from "express";
import "express-async-errors";
import productRoutes from "./features/products/v1/product.routes.js";
import { notFoundHandler } from "./middlewares/not-found.middleware.js";
import globalErrorHandler from "./middlewares/global-error.middleware.js";
import bodyParser from "body-parser";
import cors from "cors";
import config from "./config/env.js";

export const app = express();

app.use(bodyParser.json());
app.use(
  cors({
    origin: config.nodeEnv == "development" ? "*" : "https:localhost//5500",
  })
);

app.use("/api/v1/products", productRoutes);
app.use("*", notFoundHandler);
app.use(globalErrorHandler);
