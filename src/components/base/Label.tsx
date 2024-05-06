import { ReactNode } from "react";

import { Label as LabelUI } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type LabelType =
  | "Title1" /** 18test */
  | "Title2" // 111z1
  | "SubTitle1"
  | "SubTitle2"
  | "Body1"
  | "Body2"
  | "Caption";

type LabelProps = {
  type?: LabelType;
  className?: string;
  children: ReactNode;
};

export default function Label({ type, className, children }: LabelProps) {
  switch (type) {
    case "Title1":
      /** test!!!! */
      return (
        <LabelUI className={cn("font-pretendard text-[28px] font-bold", className)}>
          {children}
        </LabelUI>
      );
    case "Title2":
      return (
        <LabelUI className={cn("font-pretendard text-2xl font-semibold", className)}>
          {children}
        </LabelUI>
      );
    case "SubTitle1":
      return (
        <LabelUI className={cn("font-pretendard text-xl font-bold", className)}>{children}</LabelUI>
      );
    case "SubTitle2":
      return (
        <LabelUI className={cn("font-pretendard text-lg font-semibold", className)}>
          {children}
        </LabelUI>
      );
    case "Body1":
      return (
        <LabelUI className={cn("font-pretendard text-base font-normal", className)}>
          {children}
        </LabelUI>
      );
    case "Body2":
      return (
        <LabelUI className={cn("font-pretendard text-sm font-normal", className)}>
          {children}
        </LabelUI>
      );
    case "Caption":
      return (
        <LabelUI className={cn("font-pretendard text-xs font-normal", className)}>
          {children}
        </LabelUI>
      );
    default:
      return <LabelUI className={cn("font-pretendard", className)}>{children}</LabelUI>;
  }
}
