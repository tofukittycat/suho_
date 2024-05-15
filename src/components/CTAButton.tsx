"use client";

import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Button } from "./ui/button";

type CTAButtonProps = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
};

export default function CTAButton({ children, className, onClick }: CTAButtonProps) {
  return (
    <Button
      className={cn(
        `h-[54px] w-full rounded-[15px] bg-main-purple-suho text-[16px] font-[600] text-white hover:bg-[#7553f0]`,
        className,
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
