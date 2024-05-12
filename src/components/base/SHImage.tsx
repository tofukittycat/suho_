import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type SHImageProps = {
  src: string;
  size?: string;
  fallbackElement?: ReactNode;
  className?: string;
};

export default function SHImage({ src, size, fallbackElement, className }: SHImageProps) {
  return (
    <Avatar className={cn(`size-[${size}]`, className)}>
      <AvatarImage src={src} />
      {fallbackElement && <AvatarFallback>{fallbackElement}</AvatarFallback>}
    </Avatar>
  );
}
