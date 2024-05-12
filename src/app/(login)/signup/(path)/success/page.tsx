"use client";

import SHLabel from "@/components/base/SHLabel";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";

import ConfirmButton from "../../_components/ConfirmButton";
import useSignUp from "../../_hooks/useSignUp";

export default function page() {
  const { handleGoToSignIn } = useSignUp();

  return (
    <VStack className="px-[20px]">
      <VCStack className=" mt-[40px] h-[220px] rounded-[26px] bg-[#F2F4F5]">Lottie</VCStack>
      <VCStack className="mt-[60px]">
        <SHLabel
          type="SubTitle1"
          className="whitespace-pre-wrap text-center"
        >{`가입이 완료되었어요!\n행운부적을 만들어보세요`}</SHLabel>
      </VCStack>
      <VStack className="mt-[32px]">
        <ConfirmButton onClick={handleGoToSignIn}>로그인하기</ConfirmButton>
      </VStack>
    </VStack>
  );
}
