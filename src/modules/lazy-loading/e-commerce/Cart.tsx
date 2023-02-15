import type { ReactNode } from "react";
import { CartIcon } from "./CartIcon";
import { Drawer } from "./Drawer";

export type Props = {
  children?: ReactNode;
  onClick: () => void;
  onClose: () => void;
  isOpen: boolean;
};

export const Cart = ({ children, isOpen, onClick, onClose }: Props) => {
  return (
    <>
      <Drawer isOpen={isOpen} onClose={onClose}>
        {children}
      </Drawer>
      <div className="w-full flex justify-end text-gray-100">
        <CartIcon onClick={onClick} />
      </div>
    </>
  );
};
