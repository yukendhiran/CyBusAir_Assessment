import { useEffect, useState } from "react";
import { ProductCard } from "./ProductCard";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string | null;
}

export const ProductGrid = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/v1/products/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      setProducts((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete product.");
    }
  };

  return (
    <div className="container mx-auto px-2 py-2">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {products?.map((product: Product) => (
          <li key={product.id}>
            <ProductCard {...product} onDelete={handleDelete} />
          </li>
        ))}
      </ul>
    </div>
  );
};
