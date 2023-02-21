import type { HoverCardProps } from "@radix-ui/react-hover-card";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import clsx from "clsx";
import type { ReactNode } from "react";

type Configs = {
  content?: {
    className: string;
  };
  arrow?: {
    className: string;
  };
  root?: Partial<Omit<HoverCardProps, "children">>;
};
interface Props {
  title: ReactNode;
  children: ReactNode;
  configs?: Configs;
}

export const HoverCard = ({ title, children, configs }: Props) => {
  return (
    <HoverCardPrimitive.Root {...configs?.root}>
      <HoverCardPrimitive.Trigger asChild>{title}</HoverCardPrimitive.Trigger>
      <HoverCardPrimitive.Content
        align="center"
        sideOffset={4}
        className={clsx(
          "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
          "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 z-[9999]",
          configs?.content?.className
        )}
      >
        <HoverCardPrimitive.Arrow
          className={clsx(
            "fill-current text-white dark:text-gray-800",
            configs?.arrow?.className
          )}
        />

        {children}
      </HoverCardPrimitive.Content>
    </HoverCardPrimitive.Root>
  );
};
