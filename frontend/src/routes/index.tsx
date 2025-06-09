import { ProductForm } from "@/components/ProductForm";
import { ProductGrid } from "@/components/ProductGrid";
import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <>
      <h1 className="text-3xl p-4 font-bold">Product</h1>
      <ProductForm />
      <ProductGrid />
    </>
  );
}
