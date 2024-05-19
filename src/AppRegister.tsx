"use client";

import { ReactNode, useEffect } from "react";

import { Toaster } from "./components/ui/toaster";
import DayjsProvider from "./providers/dayjs/DayjsProvider";
import MuiProvider from "./providers/mui/MuiProvider";
import ReactQueryProvider from "./providers/react-query/ReactQueryProvider";
import RecoilProvider from "./providers/recoil/RecoilProvider";
import { ThemeProvider } from "./providers/shacnd/ThemeProvider";
import ApiErrorBoundary from "./services/ApiErrorBoundary";
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
    <RecoilProvider>
      <ThemeProvider>
        <DayjsProvider>
          <MuiProvider>
            <ReactQueryProvider>
              <ApiErrorBoundary>{children}</ApiErrorBoundary>
            </ReactQueryProvider>
            <Toaster />
          </MuiProvider>
        </DayjsProvider>
      </ThemeProvider>
    </RecoilProvider>
  );
}
