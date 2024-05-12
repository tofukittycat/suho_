import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import VStack from "./stack/VStack";

type SHCardProps = {
  className?: string;
  children: ReactNode;
};

export default function SHCard({ className, children }: SHCardProps) {
  return (
    <VStack className={cn("h-full w-full rounded-[15px] bg-white p-[24px] shadow-md", className)}>
      {children}
    </VStack>
  );
}
