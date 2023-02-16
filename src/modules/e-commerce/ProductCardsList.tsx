import { ProductCard } from "./ProductCard";

export const ProductCardsList = () => (
  <div className="w-full h-full grid grid-cols-auto-fit gap-6 items-center overflow-y-auto">
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
);
