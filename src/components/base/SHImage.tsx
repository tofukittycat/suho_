import { MutableRefObject, ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

type SHImageProps = {
  src: string;
  id?: string;
  size?: string;
  fallbackElement?: ReactNode;
  className?: string;
  children?: ReactNode;
};

export default function SHImage({
  id,
  src,
  size,
  fallbackElement,
  className,
  children,
}: SHImageProps) {
  return (
    <Avatar id={id} className={cn(`size-[${size}]`, className)}>
      <AvatarImage src={src}></AvatarImage>
      {fallbackElement && <AvatarFallback>{fallbackElement}</AvatarFallback>}
      {children}
    </Avatar>
  );
}
