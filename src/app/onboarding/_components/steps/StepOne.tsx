import Image from "next/image";

import { useEffect } from "react";
import Lottie from "react-lottie";

import SHLabel from "@/components/base/SHLabel";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";
import useAppRepository from "@/components/hooks/useAppRepository";
import { Button } from "@/components/ui/button";

import * as animationData from "../../../../../public/lotties/onboarding_splash.json";

type StepOneProps = {
  onClickSubmit: () => void;
};

export default function StepOne({ onClickSubmit }: StepOneProps) {
  const {
    visibleBGStore: [_, setVisibleBG],
  } = useAppRepository();

  useEffect(() => {
    setTimeout(() => {
      setVisibleBG(true);
      onClickSubmit();
    }, 5000);
  }, []);

  return (
    <VCStack className="h-full w-full">
      <VStack className="aspect-square w-full">
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
          }}
          height={"100%"}
          width={"100%"}
        />
      </VStack>
      <VStack className="gap-[10px]">
        <div className="mt-[50px] text-white">
          <Image src={"/imgs/logo.svg"} alt="logo" width={160} height={28} />
        </div>
        <SHLabel className="text-[14px] font-[500] text-white">빅데이터로 보는 사주 컨설팅</SHLabel>
      </VStack>
    </VCStack>
  );
}
