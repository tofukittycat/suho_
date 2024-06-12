"use client";

import Image from "next/image";

import { useEffect } from "react";

import CTAContainer from "@/components/CTAContainer";
import SHLabel from "@/components/base/SHLabel";
import { SHSpinner } from "@/components/base/SHSpinner";
import VStack from "@/components/base/stack/VStack";
import useStorage from "@/components/hooks/useStorage";

import LoginButton from "./_components/LoginButton";
import useSignIn from "./_hooks/useSignIn";

export default function SigninPage() {
  const { clearStorage } = useStorage();
  const { handleSiginKakao, handleSigninNaver } = useSignIn();

  useEffect(() => {
    clearStorage();
  }, []);

  return (
    <VStack className="h-full w-full justify-between">
      <VStack className="mt-[36px] w-full items-center">
        <Image src={"/imgs/small_logo_blue.svg"} alt="logo" width={74} height={14} />
        <div className="mt-[120px] ">
          <SHSpinner />
        </div>

        <SHLabel className="text-center text-[32px] font-[800] text-white">내 부적을 써줘</SHLabel>
        <SHLabel className=" text-center text-[14px] font-[500] text-white">
          친구에게 행운기운을 담은 부적을 받아보세요.
        </SHLabel>
      </VStack>

      <CTAContainer>
        <VStack className="gap-[7px]">
          <LoginButton buttonType="KAKAO" onClick={handleSiginKakao} />
          <LoginButton buttonType="NAVER" onClick={handleSigninNaver} />
        </VStack>
      </CTAContainer>
    </VStack>
    // <VStack
    //   wFull
    //   hFull
    //   className="gap-[12px] bg-gradient-to-b from-[#E4DCFF] to-[#FFFFFF] px-[20px]"
    // >
    //   <VCStack className=" mt-[40px] h-[220px] rounded-[26px] bg-[#F2F4F5]">Lottie</VCStack>
    //   <VStack className="h-[300px] justify-end gap-[7px]">
    //     <LoginButton buttonType="KAKAO" onClick={handleSiginKakao} />
    //     {/* <LoginButton buttonType="NAVER" />
    //     <LoginButton buttonType="GOOGLE" />
    //     <LoginButton buttonType="EMAIL" onClick={handleGoToEmail} /> */}
    //   </VStack>
    //   {/* <Button
    //     variant={"ghost"}
    //     className="text-[#918A8C] underline hover:bg-transparent"
    //     onClick={handleGoToSignUp}
    //   >
    //     이메일로 회원가입
    //   </Button> */}
    // </VStack>
  );
}
