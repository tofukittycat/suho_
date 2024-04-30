import { ReactNode } from "react";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";

import muiTheme from "./muiTheme";

type MuiProviderProps = {
  children: ReactNode;
};

export default function MuiProvider({ children }: MuiProviderProps) {
  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
    </AppRouterCacheProvider>
  );
}
