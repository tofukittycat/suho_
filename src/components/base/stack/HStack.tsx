import { Stack, StackProps } from "@mui/material";

type HStackProps = {
  wFull?: boolean;
  hFull?: boolean;
} & StackProps;

export default function HStack({ wFull, hFull, ...props }: HStackProps) {
  return (
    <Stack
      direction={"row"}
      width={wFull ? "100%" : props.width}
      height={hFull ? "100%" : props.height}
      {...props}
    />
  );
}
