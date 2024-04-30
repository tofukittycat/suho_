"use client";

import { ReactNode } from "react";

import DayjsProvider from "./providers/dayjs/DayjsProvider";
import MuiProvider from "./providers/mui/MuiProvider";
import ReactQueryProvider from "./providers/react-query/ReactQueryProvider";
import { ThemeProvider } from "./providers/shacnd/ThemeProvider";

type AppRegisterProps = {
  children: ReactNode;
};

export default function AppRegister({ children }: AppRegisterProps) {
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
