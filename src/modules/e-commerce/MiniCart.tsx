import { Cart } from "./Cart";
import { useDisclosure } from "./useDisclosure";

export const MiniCart = ({ children }: { children: JSX.Element }) => {
  const { isOpen, open, close } = useDisclosure();
  return (
    <Cart onClick={open} onClose={close} isOpen={isOpen}>
      {children}
    </Cart>
  );
};
