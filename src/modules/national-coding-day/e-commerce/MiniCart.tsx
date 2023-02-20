import { useDisclosure } from "./useDisclosure";

import type { ReactNode } from "react";
import { CartIcon } from "./CartIcon";
import { Drawer } from "./Drawer";

export const MiniCart = ({ children  }: { children?: ReactNode }) => {
  const { isOpen, open, close } = useDisclosure();
  return (
    <>
      <Drawer isOpen={isOpen} onClose={close} header="Cart">
        <div className="w-full text-white text-3xl text-center">Cart is Empty !</div>
      </Drawer>
      <div className="w-full flex justify-end text-gray-100">
        <CartIcon onClick={open} />
      </div>
    </>
  );
};
