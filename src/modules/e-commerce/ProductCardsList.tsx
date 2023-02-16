import { ProductCard } from "./ProductCard";

type Props = {
  row?: number;
};

export const ProductCardsList = ({ row = 1 }: Props) => (
  <div className="w-full h-full grid grid-cols-auto-fit gap-6 items-center overflow-y-auto">
    {Array(row * 4).fill(null).map(ProductCard)}
  </div>
);
