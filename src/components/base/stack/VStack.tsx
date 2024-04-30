import { Stack, StackProps } from "@mui/material";

type VStackProps = {
  wFull?: boolean;
  hFull?: boolean;
} & StackProps;

export default function VStack({ wFull, hFull, ...props }: VStackProps) {
  return (
    <Stack
      direction={"column"}
      width={wFull ? "100%" : props.width}
      height={hFull ? "100%" : props.height}
      {...props}
    />
  );
}
