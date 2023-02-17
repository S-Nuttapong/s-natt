import type { ReactNode } from "react";

export const StorefrontContainer = ({ children }: { children?: ReactNode }) => (
  <div className="flex w-full h-full items-center px-10 py-5 overflow-hidden">
    <div className="bg-transparent w-full h-full justify-items-center border-2 border-gray-100 xxl:px-20 lg:px-10 xxl:py-10 lg:py-5 relative overflow-hidden">
      {children}
    </div>
  </div>
);
