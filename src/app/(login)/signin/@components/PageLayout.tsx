import { ReactNode } from "react";

import VStack from "@/components/base/stack/VStack";
import { cn } from "@/lib/utils";

type PageLayoutProps = {
  children: ReactNode;
  className?: string;
};

export default function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <VStack className={cn("h-full bg-black-purple-suho px-[20px] pt-[60px]", className)}>
      {children}
    </VStack>
  );
}
