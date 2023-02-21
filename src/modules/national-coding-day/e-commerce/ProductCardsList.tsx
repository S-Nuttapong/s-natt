import { ProductCard } from "./ProductCard";

type Props = {
  row?: number;
};

export const ProductCardsList = ({ row = 1 }: Props) => (
  <div className="flex w-full h-full justify-center items-center overflow-scroll xxl:py-20 sm:py-10">
    <div className="w-full h-full grid grid-cols-product-grid gap-6 items-center overflow-y-auto">
      {Array(row * 4)
        .fill(null)
        .map(ProductCard)}
    </div>
  </div>
);
