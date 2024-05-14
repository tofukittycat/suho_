"use client";

import { useEffect } from "react";

import SHCard from "@/components/base/SHCard";
import SHLabel from "@/components/base/SHLabel";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";

type LuckyResultPendingStepProps = {
  onSuccess: () => void;
};

export default function LuckyResultPendingStep({ onSuccess }: LuckyResultPendingStepProps) {
  useEffect(() => {
    setTimeout(() => {
      onSuccess();
    }, 2000);
  }, []);

  return (
    <>
      {/* Tree BG */}
      <VStack wFull hFull>
        {/* Tree BG_Top */}
        <VCStack className=" mb-[-26px] h-full items-center">
          <SHLabel className="whitespace-pre-line text-center text-[24px] font-[800] text-white">
            {`수호 동물과\n행운 기운을 찾고 있어요`}
          </SHLabel>
        </VCStack>
        {/* Tree BG_BOTTOM */}
        <VStack className="h-full w-full bg-[url('/imgs/home_tree_bottom.svg')] bg-cover bg-no-repeat">
          <VStack className="mx-[20px] mt-[80px]">
            <SHCard className=" bg-white/80">
              <VCStack className="items-center gap-[10px]">
                <SHLabel className="text-[16px] font-[800] text-main-purple-suho">
                  수호동물이란?
                </SHLabel>
                <SHLabel className="whitespace-pre-line px-[30px] text-[13px] font-[500] text-[#525A61]">
                  수호동물은 태어난 날짜에 따라 정해지는 사주 상의 동물이에요. MBTI 보다 다양한
                  60가지로 나의 성격과 기질을 알아볼 수 있어요{" "}
                </SHLabel>
              </VCStack>
            </SHCard>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
}
