import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import VStack from "./base/stack/VStack";

type CTABottomPaddingProps = {
  children: ReactNode;
  className?: string;
};

export default function CTABottomPadding({ children, className }: CTABottomPaddingProps) {
  return (
    <VStack
      className={cn("absolute bottom-0 left-0 right-0 z-50 h-[30%] w-full px-[20px]", className)}
    >
      {children}
    </VStack>
  );
}
