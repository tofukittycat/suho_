import { IoIosArrowDown as ArrowDownIcon } from "react-icons/io";

import { SHColors } from "@/lib/theme";
import { MenuItem, TextField, TextFieldProps } from "@mui/material";

export type SHInputSelectProps = TextFieldProps & {
  fontColor?: string;
  items: { label: string; value: string }[];
};

export default function SHInputSelect({ fontColor, items, ...props }: SHInputSelectProps) {
  return (
    <TextField
      select
      variant="standard"
      SelectProps={{
        IconComponent: () => <ArrowDownIcon />,
      }}
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
    >
      {items.map(({ label, value }, index) => (
        <MenuItem
          key={index}
          value={value}
          sx={{
            fontSize: "12px",
            fontWeight: 500,
            color: "#18181B",
          }}
        >
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
}
