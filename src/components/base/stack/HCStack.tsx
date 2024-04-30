import { Stack, StackProps } from "@mui/material";

type HCStackProps = {
  wFull?: boolean;
  hFull?: boolean;
} & StackProps;

export default function HCStack({ wFull, hFull, ...props }: HCStackProps) {
  return (
    <Stack
      direction={"row"}
      width={wFull ? "100%" : props.width}
      height={hFull ? "100%" : props.height}
      justifyContent={"center"}
      alignItems={"center"}
      {...props}
    />
  );
}
