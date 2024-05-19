import { ReactNode } from "react";

import HillBGView from "@/components/base/bg/HillBGView";

type LayoutProps = {
  children: ReactNode;
};

export default function layout({ children }: LayoutProps) {
  return <HillBGView>{children}</HillBGView>;
}
