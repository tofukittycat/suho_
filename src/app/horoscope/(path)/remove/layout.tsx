import { ReactNode } from "react";

import UniverseBGView from "@/components/base/bg/UniverseBGView";

type LayoutProps = {
  children: ReactNode;
};

export default function layout({ children }: LayoutProps) {
  return <UniverseBGView>{children}</UniverseBGView>;
}
