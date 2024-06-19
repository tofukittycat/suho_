"use client";

import CTAContainer from "@/components/CTAContainer";
import SHCard from "@/components/base/SHCard";
import SHLabel from "@/components/base/SHLabel";
import { SHSpinner } from "@/components/base/SHSpinner";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";

export default function HoroscopeResultPending() {
  return (
    <>
      {/* Tree BG */}
      <VStack wFull hFull>
        {/* Tree BG_Top */}
        <VCStack className="mt-[60px] h-full items-center">
          <SHLabel className="whitespace-pre-line text-center text-[24px] font-[800] text-white">
            {`오늘의 운세와\n행운기운을 분석하고 있어요`}
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
                행운기운이란?
              </SHLabel>
              <SHLabel className="whitespace-normal px-[20px] text-center text-[13px] font-[500] text-[#525A61]">
                {`행운 기운은 사주명리학의 오행 중 자신에게 부족한 기운입니다. 행운기운을 알아보고 행운 부적을 받아보세요!`}
              </SHLabel>
            </VCStack>
          </SHCard>
        </CTAContainer>
      </VStack>
    </>
  );
}
