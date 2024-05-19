"use client";

import { useEffect } from "react";

import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";
import useAuth from "@/components/hooks/useAuth";

import LoginButton from "./_components/LoginButton";
import useSignIn from "./_hooks/useSignIn";

export default async function SigninPage() {
  const { handleClearToken } = useAuth();
  const { handleSiginKakao } = useSignIn();

  useEffect(() => {
    handleClearToken();
  }, []);

  return (
    <VStack
      wFull
      hFull
      className="gap-[12px] bg-gradient-to-b from-[#E4DCFF] to-[#FFFFFF] px-[20px]"
    >
      <VCStack className=" mt-[40px] h-[220px] rounded-[26px] bg-[#F2F4F5]">Lottie</VCStack>
      <VStack className="h-[300px] justify-end gap-[7px]">
        <LoginButton buttonType="KAKAO" onClick={handleSiginKakao} />
        {/* <LoginButton buttonType="NAVER" />
        <LoginButton buttonType="GOOGLE" />
        <LoginButton buttonType="EMAIL" onClick={handleGoToEmail} /> */}
      </VStack>
      {/* <Button
        variant={"ghost"}
        className="text-[#918A8C] underline hover:bg-transparent"
        onClick={handleGoToSignUp}
      >
        이메일로 회원가입
      </Button> */}
    </VStack>
  );
}
