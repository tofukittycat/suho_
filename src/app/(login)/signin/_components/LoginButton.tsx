import Image from "next/image";

import { useMemo } from "react";

import { Button, ButtonProps } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

type LoginType = "KAKAO" | "NAVER" | "GOOGLE" | "EMAIL";

type LoginButtonProps = ButtonProps & {
  buttonType: LoginType;
};

export default function LoginButton({ buttonType, ...props }: LoginButtonProps) {
  const [src, label, bgColor, fontColor] = useMemo(() => {
    switch (buttonType) {
      case "KAKAO":
        return ["/imgs/icons/ic_kakao_login.svg", "카카오로 시작하기", "#FBE34C", "#0B082B"];
      case "NAVER":
        return ["/imgs/icons/ic_naver_login.svg", "네이버로 시작하기", "#5DCA48", "#FFFFFF"];
      case "GOOGLE":
        return ["/imgs/icons/ic_google_login.svg", "Google로 시작하기", "#F7F7F7", "#0B082B"];
      default:
        return ["/imgs/icons/ic_email_login.svg", "이메일로 시작하기", "#F4FAFC", "#009BFF"];
    }
  }, [buttonType]);

  return (
    <Button className={`relative h-[56px] w-full`} style={{ backgroundColor: bgColor }} {...props}>
      <Image
        src={src}
        alt="login-logo"
        width={20}
        height={20}
        style={{ width: 20, height: 20 }}
        className="absolute left-[26px] top-[18px]"
      />
      <Label className={`text-[17px] font-[700]`} style={{ color: fontColor }}>
        {label}
      </Label>
    </Button>
  );
}
