import { lazy, Suspense, useState } from "react";
import { Cart } from "./Cart";
import { ProductCardsList } from "./ProductCardsList";
import { StorefrontTemplate } from "./StorefrontTemplate";
import { useDisclosure } from "./useDisclosure";

const LazyBloatedComp = lazy(
  async () => await import("../bloated-component/index")
);

const LazyCart = () => {
  const { isOpen, open, close } = useDisclosure();

  const [isLoadModule, setLoadModule] = useState(false);

  const handleClick = () => {
    setLoadModule(true);
    open();
  };

  return (
    <Cart onClick={handleClick} onClose={close} isOpen={isOpen}>
      <Suspense
        fallback={<div className="text-white text-center">Loading...</div>}
      >
        {isLoadModule && <LazyBloatedComp />}
      </Suspense>
    </Cart>
  );
};

export const LazyStorefront = () => {
  return (
    <StorefrontTemplate
      cart={<LazyCart />}
      productCardList={<ProductCardsList />}
    />
  );
};
