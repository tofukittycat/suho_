import { Button, ButtonProps } from "@/components/ui/button";

type ConfirmButtonProps = ButtonProps;

export default function ConfirmButton({ ...props }: ConfirmButtonProps) {
  return (
    <Button
      className="h-[54px] rounded-[12px] bg-[#7B57FC] hover:bg-main-purple-suho/80"
      {...props}
    >
      {props.children || "확인 "}
    </Button>
  );
}
