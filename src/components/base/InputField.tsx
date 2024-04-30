import { SHColors } from "@/lib/theme";
import { TextField, TextFieldProps } from "@mui/material";

type InputFieldProps = TextFieldProps;

export default function InputField({ ...props }: InputFieldProps) {
  return (
    <TextField
      variant="standard"
      {...props}
      sx={{
        "& .MuiInput-root": {
          // Base
          "color": SHColors["gray-90-suho"],
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
          "color": SHColors["gray-60-suho"],
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
