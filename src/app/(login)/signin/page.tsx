"use client";

import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";
import { Button } from "@/components/ui/button";

import LoginButton from "./@components/LoginButton";
import useSignIn from "./@hooks/useSignIn";

export default function page() {
  const { handleGoToSignUp, handleGoToEmail } = useSignIn();

  return (
    <VStack wFull hFull className="gap-[12px] px-[20px]">
      <VCStack className=" mt-[40px] h-[220px] rounded-[26px] bg-[#F2F4F5]">Lottie</VCStack>
      <VStack className="gap-[7px]">
        <LoginButton buttonType="KAKAO" />
        <LoginButton buttonType="NAVER" />
        <LoginButton buttonType="GOOGLE" />
        <LoginButton buttonType="EMAIL" onClick={handleGoToEmail} />
      </VStack>
      <Button
        variant={"ghost"}
        className="text-[#918A8C] underline hover:bg-transparent"
        onClick={handleGoToSignUp}
      >
        이메일로 회원가입
      </Button>
    </VStack>
  );
}
