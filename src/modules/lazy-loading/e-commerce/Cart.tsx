import { useState, useCallback } from "react";
import { Globe } from "../../bloated-components";
import { CartIcon } from "./CartIcon";
import { Drawer } from "./Drawer";

export type Props = {
  children?: JSX.Element;
};

export const Cart = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        {children}
      </Drawer>
      <div className="w-full flex justify-end text-gray-100">
        <CartIcon onClick={open} />
      </div>
    </>
  );
};
