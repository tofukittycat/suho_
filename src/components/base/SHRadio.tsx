"use client";

import { SHColors } from "@/lib/theme";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

type SHRadioGroupProps = {
  isRow: boolean;

  items: { value: string; label: string }[];
};

export default function SHRadioGroup({ isRow, items }: SHRadioGroupProps) {
  return (
    <RadioGroup row={isRow} defaultValue={items && items[0].value}>
      {items.map(({ label, value }, index) => (
        <SHRadio key={index} label={label} value={value} />
      ))}
    </RadioGroup>
  );
}

type SHRadioProps = {
  label: string;
  value: string;
};

export function SHRadio({ label, value }: SHRadioProps) {
  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
          sx={{
            "color": "#E6E8EB",
            "&.Mui-checked": {
              color: SHColors["main-purple-suho"],
            },
            "& .MuiSvgIcon-root": {
              fontSize: "20px",
            },
          }}
        />
      }
      label={label}
      sx={{ color: "#D1D5D9", fontSize: "14px", fontWeight: 500 }}
    />
  );
}
