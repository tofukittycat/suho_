"use client";

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
  const getSize = () => {
    switch (ratio) {
      case "1:1":
        return { leftWidth: "50%", rightWidth: "50%" };
      case "1:3":
        return { leftWidth: "30%", rightWidth: "70%" };
      case "3:1":
        return { leftWidth: "70%", rightWidth: "30%" };
      default:
        return { leftWidth: "50%", rightWidth: "50%" };
    }
  };

  return (
    <HStack className="h-[54px] w-full items-center justify-between gap-[10px]">
      <Button
        className={cn(
          `h-full rounded-[15px] bg-[#E4DCFF] text-[16px] font-[600] text-main-purple-suho hover:bg-[#d9d0f4]`,
          left?.className,
        )}
        style={{ width: getSize().leftWidth }}
        onClick={left?.onClick}
      >
        {left?.title ?? "이전"}
      </Button>
      <Button
        className={cn(
          `h-full rounded-[15px] bg-main-purple-suho text-[16px] font-[600] text-white hover:bg-[#7553f0]`,
          right?.className,
        )}
        style={{ width: getSize().rightWidth }}
        onClick={right?.onClick}
      >
        {right?.title ?? "다음"}
      </Button>
    </HStack>
  );
}
