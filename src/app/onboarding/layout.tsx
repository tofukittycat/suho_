import { ReactNode } from "react";
import MobileViewLayout from "react-mobile-layout";

type LayoutProps = {
  children: ReactNode;
};

export default function layout({ children }: LayoutProps) {
  // return <div className="h-full w-full">{children}</div>;
  return <MobileViewLayout>{children}</MobileViewLayout>;
}
