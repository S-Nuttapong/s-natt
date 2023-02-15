import type { ReactNode } from "react";

type Props = {
  languageSwitch?: ReactNode;
  cart?: ReactNode;
  productCardList: ReactNode;
};

export const StorefrontTemplate = ({
  languageSwitch,
  cart,
  productCardList,
}: Props) => {
  return (
    <div className="bg-transparent w-full h-full border-2 border-gray-100 xxl:px-20 lg:px-10 xxl:py-10 lg:py-5 relative overflow-y-hidden">
      {cart}
      <div className="flex w-full h-full justify-center items-center overflow-scroll xxl:py-20 sm:py-10">
        {productCardList}
      </div>
    </div>
  );
};
