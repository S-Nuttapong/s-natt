import { useCallback, useState } from "react";
import { Globe } from "../../bloated-components";

type Props = {
  onClick: () => void;
};

const CartIcon = ({ onClick }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-8 h-8 text-inherit cursor-pointer"
    onClick={onClick}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
    />
  </svg>
);
export const Drawer = ({ children, isOpen, setIsOpen }: any) => {
  return (
    <div
      className={
        "absolute overflow-hidden z-10 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-screen max-w-md right-0 absolute bg-current border-x-2 border-inherit h-full delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative w-screen max-w-lg pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <header className="p-4 font-bold text-lg text-white">Header</header>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </div>
  );
};

const ProductCard = () => (
  <div className="w-full xxl:h-100 lg:h-80 max-w-sm border-2 border-inherit rounded-lg shadow bg-transparent flex flex-col gap-10 p-8 items-center">
    <div className=" w-full h-1/2 max-w-sm border-2 border-inherit shadow bg-transparent flex" />
    <div className=" w-full h-8 max-w-sm border-2 border-inherit shadow bg-transparent flex" />
    <div className=" w-3/4 h-1/6 max-w-sm border-2 border-inherit shadow bg-transparent flex" />
  </div>
);

export const Storefront = () => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  return (
    <div className="bg-transparent w-full h-full border-2 border-gray-100 xxl:px-20 lg:px-10 xxl:py-10 lg:py-5 relative overflow-y-hidden">
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Globe />
      </Drawer>
      <div className="w-full flex justify-end text-gray-100">
        <CartIcon onClick={open} />
      </div>
      <div className="flex w-full h-full justify-center items-center overflow-scroll xxl:py-20 xl:py-10">
        <div className="w-full h-full grid grid-cols-auto-fit gap-6 items-center overflow-y-auto">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};
