"use client";

import { ReactNode, useEffect } from "react";

import DayjsProvider from "./providers/dayjs/DayjsProvider";
import MuiProvider from "./providers/mui/MuiProvider";
import ReactQueryProvider from "./providers/react-query/ReactQueryProvider";
import { ThemeProvider } from "./providers/shacnd/ThemeProvider";
import setMobileHeight from "./utils/mobileSize";

type AppRegisterProps = {
  children: ReactNode;
};

export default function AppRegister({ children }: AppRegisterProps) {
  useEffect(() => {
    // 모바일 Height 적용
    setMobileHeight();

    window.addEventListener("resize", setMobileHeight);
    return () => window.removeEventListener("resize", setMobileHeight);
  }, []);

  return (
    <ThemeProvider>
      <DayjsProvider>
        <MuiProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </MuiProvider>
      </DayjsProvider>
    </ThemeProvider>
  );
}
