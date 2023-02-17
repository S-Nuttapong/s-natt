import { useDisclosure } from "./useDisclosure";

import type { ReactNode } from "react";
import { CartIcon } from "./CartIcon";
import { Drawer } from "./Drawer";

export const MiniCart = ({ children = null }: { children?: ReactNode }) => {
  const { isOpen, open, close } = useDisclosure();
  return (
    <>
      <Drawer isOpen={isOpen} onClose={close}>
        {children}
      </Drawer>
      <div className="w-full flex justify-end text-gray-100">
        <CartIcon onClick={open} />
      </div>
    </>
  );
};
