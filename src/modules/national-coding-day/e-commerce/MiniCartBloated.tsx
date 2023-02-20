import { useDisclosure } from "./useDisclosure";

import type { ReactNode } from "react";
import BloatedEcom from "./BloatedEcom";
import { CartIcon } from "./CartIcon";
import { Drawer } from "./Drawer";

export const MiniCartBloated = ({
  children = null,
}: {
  children?: ReactNode;
}) => {
  const { isOpen, open, close } = useDisclosure();
  return (
    <>
      <Drawer isOpen={isOpen} onClose={close} header="Cart">
        <BloatedEcom />
      </Drawer>
      <div className="w-full flex justify-end text-gray-100">
        <CartIcon onClick={open} />
      </div>
    </>
  );
};
