import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import VStack from "./base/stack/VStack";

type CTAContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function CTAContainer({ children, className }: CTAContainerProps) {
  return (
    <VStack className={cn("mb-[100px] h-full w-full justify-end px-[20px]", className)}>
      {children}
    </VStack>
  );
}
