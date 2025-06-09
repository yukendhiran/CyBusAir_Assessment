import { products } from "../app";
import { Product } from "../models";
import { v4 as uuidv4 } from "uuid";

export const addProduct = (product: Product) => {
  product.id = uuidv4();
  products.push(product);
};

export const getProduct = (id: string) => products.find((p) => p.id === id);

export const getAllProducts = () => products;

export const deleteProduct = (id: string) => {
  const index = products.findIndex((p) => p.id === id);
  if (index >= 0) products.splice(index, 1);
};

export const productController = {
  add: addProduct,
  get: getProduct,
  getAll: getAllProducts,
  delete: deleteProduct,
};
