export type Props = {
  children?: JSX.Element;
  onClose: () => void;
  isOpen: boolean;
  header: string;
};

export const Drawer = ({ children, isOpen, onClose, header }: any) => {
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
          <header className="p-4 font-bold text-lg text-white">{header}</header>
          {children}
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={onClose}
      ></section>
    </div>
  );
};
