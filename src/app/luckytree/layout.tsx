import { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function layout({ children }: LayoutProps) {
  return <div className="h-full w-full">{children}</div>;
}
