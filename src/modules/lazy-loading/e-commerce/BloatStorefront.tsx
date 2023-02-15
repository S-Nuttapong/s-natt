import { ProductCardsList } from "./ProductCardsList";
import { StorefrontTemplate } from "./StorefrontTemplate";
import { Globe } from "../../bloated-components";
import { Cart } from "./Cart";
import { useDisclosure } from "./useDisclosure";

export const BloatedCart = () => {
  const { isOpen, open, close } = useDisclosure();

  console.log(Globe);

  return (
    <Cart onClick={open} onClose={close} isOpen={isOpen}>
      <div className="text-white text-center align-middle">I am expensive!!!</div>;
    </Cart>
  );
};

export const BloatedStorefront = () => (
  <StorefrontTemplate
    cart={<BloatedCart />}
    productCardList={<ProductCardsList />}
  />
);
