import { ReactNode } from "react";

import { Label as LabelUI } from "@/components/ui/label";
import { cn } from "@/lib/utils";

type LabelType =
  | "Title1" /** 28px, 700*/
  | "Title2" /** 24px, 600 */
  | "SubTitle1" /** 20px 700 */
  | "SubTitle2" /** 18px 600 */
  | "Body1" /** 16px 400 */
  | "Body2" /** 14px 400 */
  | "Caption" /** 12px 400 */;

type LabelProps = {
  type?: LabelType;
  className?: string;
  children: ReactNode;
};

export default function SHLabel({ type, className, children }: LabelProps) {
  switch (type) {
    case "Title1":
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
