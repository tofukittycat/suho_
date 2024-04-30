"use client";

import { SHFont } from "@/lib/theme";
import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  typography: {
    fontFamily: "Pretendard, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "Pretendard",
          src: `url(${SHFont}) format("truetype")`,
        },
      },
    },
    MuiInputLabel: {
      defaultProps: { shrink: true },
    },
  },
});

export default muiTheme;
