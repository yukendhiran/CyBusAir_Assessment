import type { Product } from "./ProductGrid";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ProductCardProps extends Product {
  onDelete: (id: string) => void;
}

export const ProductCard = (props: ProductCardProps) => {
  const { id, name, price, description, onDelete } = props;
  return (
    <Card className="shadow-md rounded-lg p-4 mb-4">
      <CardHeader className="flex flex-col justify-between mb-4">
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription className="text-sm text-gray-600">
          {description || "No description"}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex justify-between items-center">
        <p className="text-lg font-bold">${price}</p>
        <Button variant="destructive" size="sm" onClick={() => onDelete(id)}>
          Delete
        </Button>
      </CardContent>
    </Card>
  );
};
