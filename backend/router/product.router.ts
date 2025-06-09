import express, { Router } from "express";
import { productController } from "../controllers/product.controller";
import { Product } from "../models/product.models";
import { logger } from "../utils/logger";

export const router: Router = express.Router();

router.get("/", (req, res) => {
  const products = productController.getAll();
  res.json(products);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const product = productController.get(id);
  if (!product) {
    res.status(404).json({ message: "Product not found" });
  } else {
    res.json(product);
  }
});

router.post("/", (req, res) => {
  logger.info(req.body);
  const product: Product = req.body;
  productController.add(product);
  res.json({ message: "Product added successfully" });
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  productController.delete(id);
  res.json({ message: "Product deleted successfully" });
});
