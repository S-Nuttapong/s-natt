import { useDisclosure } from "./useDisclosure";

import React, { ReactNode, Suspense, useState } from "react";
import { CartIcon } from "./CartIcon";
import { Drawer } from "./Drawer";

const Globe = React.lazy(() => import("../bloated-components/bloated-component"));

export const MiniCartLazy = ({ children = null }: { children?: ReactNode }) => {
  const { isOpen, open, close } = useDisclosure();
  const [isVisible, setVisible] = useState(false);

  const onOpen = () => {
    open();
    setVisible(true);
  };
  return (
    <>
      <Drawer isOpen={isOpen} onClose={close} header="Cart">
        <Suspense fallback="...loading">
          {isVisible ? (
            <div className="ml-6">
              <Globe />
            </div>
          ) : null}
        </Suspense>
      </Drawer>
      <div className="w-full flex justify-end text-gray-100">
        <CartIcon onClick={onOpen} />
      </div>
    </>
  );
};
