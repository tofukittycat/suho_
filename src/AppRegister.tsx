"use client";

import { ReactNode, useEffect } from "react";

import { Toaster } from "./components/ui/toaster";
import DayjsProvider from "./providers/dayjs/DayjsProvider";
import MuiProvider from "./providers/mui/MuiProvider";
import ReactQueryProvider from "./providers/react-query/ReactQueryProvider";
import RecoilProvider from "./providers/recoil/RecoilProvider";
import { ThemeProvider } from "./providers/shacnd/ThemeProvider";
import ApiErrorBoundary from "./services/ApiErrorBoundary";

type AppRegisterProps = {
  children: ReactNode;
};

export default function AppRegister({ children }: AppRegisterProps) {
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
