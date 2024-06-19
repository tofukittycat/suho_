"use client";

import { ChangeEvent } from "react";

import { SHColors } from "@/lib/theme";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";

type SHRadioGroupProps = {
  isRow: boolean;
  value?: number;
  items: { value: string; label: string }[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function SHRadioGroup({ isRow, items, value, onChange }: SHRadioGroupProps) {
  return (
    <RadioGroup row={isRow} value={value ?? items[0].value} onChange={onChange}>
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
