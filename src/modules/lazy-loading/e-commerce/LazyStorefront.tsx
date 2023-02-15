import { lazy, Suspense, useState } from "react";
import { Cart } from "./Cart";
import { ProductCardsList } from "./ProductCardsList";
import { StorefrontTemplate } from "./StorefrontTemplate";
import { useDisclosure } from "./useDisclosure";

const LazyBloatedComp = lazy(async () => {
  const BloatedComponents = await import(
    "../../bloated-components/globe/index"
  );
  return BloatedComponents;
});

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
        {isLoadModule ? (
          <div className="text-white text-center">
            <LazyBloatedComp />
          </div>
        ) : null}
      </Suspense>
    </Cart>
  );
};

export const LazyStorefront = () => {
  <StorefrontTemplate
    cart={<LazyCart />}
    productCardList={<ProductCardsList />}
  />;
};
