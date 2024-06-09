import { SHColors } from "@/lib/theme";
import { TextField, TextFieldProps } from "@mui/material";

import { Button, ButtonProps } from "../ui/button";

export type SHInputFieldProps = TextFieldProps & {
  fontColor?: string;
};

export default function SHInputField({ fontColor, ...props }: SHInputFieldProps) {
  return (
    <TextField
      variant="standard"
      {...props}
      sx={{
        "width": "100%",
        "& .MuiInput-root": {
          // Base
          "color": fontColor ?? SHColors["gray-90-suho"],
          "fontSize": "20px",
          "fontWeight": "500",

          // Bottom border
          "&:before": {
            borderColor: SHColors["gray-10-suho"],
            borderBottomWidth: "2px",
          },
          // Border on focus
          "&:after": {
            borderColor: SHColors["main-purple-suho"],
          },

          ":hover:not(.Mui-focused)": {
            "&:before": {
              borderColor: SHColors["gray-10-suho"],
            },

            "&.Mui-error": {
              "&:before": {
                borderColor: SHColors["red-40-suho"],
              },
            },
          },

          "&.Mui-error": {
            "&:after": {
              borderColor: SHColors["red-40-suho"],
            },
          },
        },
        // Label
        "& .MuiInputLabel-standard": {
          "color": "#E6E8EB",
          "fontSize": "16px",
          "fontWeight": "500",

          "&.Mui-focused": {
            color: SHColors["main-purple-suho"],
          },
          "&.Mui-error": {
            color: SHColors["red-40-suho"],
          },
        },
        // Helper Text
        "& .MuiFormHelperText-root": {
          "color": SHColors["gray-60-suho"],
          "fontSize": "12px",
          "fontWeight": "500",

          "&.Mui-focused": {
            color: SHColors["main-purple-suho"],
          },
          "&.Mui-error": {
            color: SHColors["red-40-suho"],
          },
        },
        ...props.sx,
      }}
    />
  );
}

/**
 * Input Field에 사용되는 Button
 */
export const InputFieldButton = ({ ...props }: ButtonProps) => {
  return (
    <Button
      className="mb-2 ml-3 h-[28px] rounded-[14px] bg-main-purple-suho text-[13px] font-[500] text-[#FFFFFF] hover:bg-main-purple-suho/90"
      {...props}
    >
      {props.children}
    </Button>
  );
};
