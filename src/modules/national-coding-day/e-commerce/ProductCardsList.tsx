import { ProductCard } from "./ProductCard";

type Props = {
  row?: number;
};

export const ProductCardsList = ({ row = 1 }: Props) => (
  <div className="flex w-full h-full items-center overflow-scroll py-10">
    <div className="w-full h-full grid grid-cols-product-grid gap-6 items-center justify-items-center overflow-y-auto">
      {Array(row * 4)
        .fill(null)
        .map(ProductCard)}
    </div>
  </div>
);
