import type { ReactNode } from "react";
import { HowItWorks, HowItWorksProps } from "./HowItWorks";

type Props = {
  children?: ReactNode;
} & HowItWorksProps;

export const StorefrontContainer = ({ children, instruction }: Props) => (
  <div className="flex flex-col w-full h-full justify-center items-center px-10 py-5 overflow-hidden">
    <div className="flex w-full justify-end z-50">
      <HowItWorks instruction={instruction} />
    </div>
    <div className="bg-transparent w-full h-full border-2 border-gray-100 xxl:px-20 xs:px-10 py-10 relative overflow-y-hidden">
      {children}
    </div>
  </div>
);
