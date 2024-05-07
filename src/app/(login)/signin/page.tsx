"use client";

import VStack from "@/components/base/stack/VStack";
import { Button } from "@/components/ui/button";

import LoginButton from "./components/LoginButton";
import useSignIn from "./hooks/useSignIn";

export default function page() {
  const { handleGoToSignUp } = useSignIn();

  return (
    <VStack wFull hFull className="px-[20px]">
      <VStack className="my-[200px] flex-grow-0 items-center justify-center">Lottie</VStack>
      <VStack className="flex-shrink-0 gap-[7px]">
        <LoginButton type="KAKAO" />
        <LoginButton type="NAVER" />
        <LoginButton type="GOOGLE" />
        <LoginButton type="EMAIL" />
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
