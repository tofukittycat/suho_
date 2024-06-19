"use client";

import CTAContainer from "@/components/CTAContainer";
import SHCard from "@/components/base/SHCard";
import SHLabel from "@/components/base/SHLabel";
import { SHSpinner } from "@/components/base/SHSpinner";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";

export default function LuckyResultPending() {
  return (
    <>
      {/* Tree BG */}
      <VStack wFull hFull>
        {/* Tree BG_Top */}
        <VCStack className="mt-[60px] h-full items-center">
          <SHLabel className="whitespace-pre-line text-center text-[24px] font-[800] text-white">
            {`수호 동물과\n행운 기운을 찾고 있어요`}
          </SHLabel>
          <div className="mt-[20px]">
            <SHSpinner />
          </div>
        </VCStack>
        {/* Tree BG_BOTTOM */}
        <CTAContainer className="mb-[80px] sm:mb-[120px]">
          <SHCard className="h-[130px] items-center justify-center bg-white/80">
            <VCStack className="items-center gap-[10px]">
              <SHLabel className="text-[16px] font-[800] text-main-purple-suho">
                수호동물이란?
              </SHLabel>
              <SHLabel className="whitespace-normal px-[20px] text-center text-[13px] font-[500] text-[#525A61]">
                {`수호동물은 태어난 날짜에 따라 정해지는 사주 상의 동물이에요. MBTI 보다 다양한
                60가지로 나의 성격과 기질을 알아볼 수 있어요`}
              </SHLabel>
            </VCStack>
          </SHCard>
        </CTAContainer>
      </VStack>
    </>
  );
}
