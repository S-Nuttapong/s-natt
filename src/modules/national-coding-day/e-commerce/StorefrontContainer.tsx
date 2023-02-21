import type { ReactNode } from "react";
import { HowItWorks } from "./HowItWorks";

type Props = {
  children?: ReactNode;
  instruction: {
    title: string;
    steps: string[];
  };
};

export const StorefrontContainer = ({ children, instruction }: Props) => (
  <div className="flex flex-col w-full h-full justify-center items-center px-10 py-5 overflow-hidden">
    <div className="flex w-full justify-end z-50">
      <HowItWorks>
        <div className="text-white text-sm">
          <div className="text-inherit">{instruction.title}</div>
          <ol className="list-auto list-inside pl-2">
            {instruction.steps.map((step) => (
              <li key={step} className="text-inherit">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </HowItWorks>
    </div>
    <div className="bg-transparent w-full h-full border-2 border-gray-100 xxl:px-20 xs:px-10 py-10 relative overflow-y-hidden">
      {children}
    </div>
  </div>
);
