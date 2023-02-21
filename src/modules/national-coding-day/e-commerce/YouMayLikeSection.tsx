import type { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const YouMayLikeSection = ({ children = null }: Props) => (
  <div className="w-full h-[32rem] flex flex-col p-4 border-2 border-white">
    <div className="text-white text-3xl">You may also like</div>
    <div className="flex justify-center">{children}</div>
  </div>
);
