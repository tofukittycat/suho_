"use client";

import { useMemo } from "react";

import { cn } from "@/lib/utils";

import HStack from "./base/stack/HStack";
import { Button } from "./ui/button";

type NavFooterProps = {
  ratio: "1:1" | "1:3" | "3:1";
  left?: {
    className?: string;
    title?: string;
    onClick?: () => void;
  };
  right?: {
    className?: string;
    title?: string;
    onClick?: () => void;
  };
};

export default function NavFooter({ ratio = "1:1", left, right }: NavFooterProps) {
  const [leftWidth, rightWidth] = useMemo(() => {
    switch (ratio) {
      case "1:1":
        return [50, 50];
      case "1:3":
        return [30, 70];
      case "3:1":
        return [70, 30];
      default:
        return [50, 50];
    }
  }, [ratio]);

  return (
    <HStack className="h-[54px] w-full items-center justify-between gap-[10px]">
      <Button
        className={cn(
          `h-full w-[${leftWidth}%] rounded-[15px] bg-[#E4DCFF] text-[16px] font-[600] text-main-purple-suho`,
          left?.className,
        )}
        onClick={left?.onClick}
      >
        {left?.title ?? "이전"}
      </Button>
      <Button
        className={cn(
          `h-full w-[${rightWidth}%] rounded-[15px] bg-main-purple-suho text-[16px] font-[600] text-white`,
          right?.className,
        )}
        onClick={right?.onClick}
      >
        {right?.title ?? "다음"}
      </Button>
    </HStack>
  );
}
