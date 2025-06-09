import express, { Request, Response, NextFunction } from "express";
import cors from "cors";

import { productRouter } from "./router";
import { Product } from "./models";

export const products: Product[] = [];

export const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("backend");
});

app.use("/api/v1/products", productRouter);
