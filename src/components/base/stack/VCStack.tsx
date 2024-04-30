import { Stack, StackProps } from "@mui/material";

type VCStackProps = {
  wFull?: boolean;
  hFull?: boolean;
} & StackProps;

export default function VCStack({ wFull, hFull, ...props }: VCStackProps) {
  return (
    <Stack
      direction={"column"}
      width={wFull ? "100%" : props.width}
      height={hFull ? "100%" : props.height}
      justifyContent={"center"}
      alignItems={"center"}
      {...props}
    />
  );
}
