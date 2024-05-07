"use client";

import Label from "@/components/base/Label";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";

import ConfirmButton from "../../@components/ConfirmButton";
import useSignUp from "../../@hooks/useSignUp";

export default function page() {
  const { handleGoToSignIn } = useSignUp();

  return (
    <VStack className="px-[20px]">
      <VCStack className="mt-[40px] h-[480px] rounded-[26px] bg-[#F2F4F5]">Lottie</VCStack>
      <VCStack className="mt-[60px]">
        <Label
          type="SubTitle1"
          className="whitespace-pre-wrap text-center"
        >{`가입이 완료되었어요!\n행운부적을 만들어보세요`}</Label>
      </VCStack>
      <VStack className="mt-[32px]">
        <ConfirmButton onClick={handleGoToSignIn}>로그인하기</ConfirmButton>
      </VStack>
    </VStack>
  );
}
