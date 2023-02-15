import { Cart } from "./Cart";
import { ProductCard } from "./ProductCard";

export const Storefront = () => {
  return (
    <div className="bg-transparent w-full h-full border-2 border-gray-100 xxl:px-20 lg:px-10 xxl:py-10 lg:py-5 relative overflow-y-hidden">
      <Cart />
      <div className="flex w-full h-full justify-center items-center overflow-scroll xxl:py-20 xl:py-10">
        <div className="w-full h-full grid grid-cols-auto-fit gap-6 items-center overflow-y-auto">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};
