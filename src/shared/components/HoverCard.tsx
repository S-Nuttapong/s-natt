import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { clsx } from "clsx";
import { ReactNode } from "react";

interface HoverCardProps {
    title: ReactNode;
    children: ReactNode;
}
export const HoverCard = ({ title, children }: HoverCardProps) => {
    return (
        <HoverCardPrimitive.Root>
            <HoverCardPrimitive.Trigger asChild>{title}</HoverCardPrimitive.Trigger>
            <HoverCardPrimitive.Content
                align="center"
                sideOffset={4}
                className={clsx(
                    " radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down",
                    "max-w-md rounded-lg p-4 md:w-full",
                    "bg-white dark:bg-gray-800",
                    "focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                )}
            >
                <HoverCardPrimitive.Arrow className="fill-current text-white dark:text-gray-800" />

                {children}
            </HoverCardPrimitive.Content>
        </HoverCardPrimitive.Root>
    );
};
