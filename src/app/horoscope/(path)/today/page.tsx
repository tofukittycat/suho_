"use client";

import SHCard from "@/components/base/SHCard";
import SHImage from "@/components/base/SHImage";
import SHLabel from "@/components/base/SHLabel";
import { SHGlobalSpinner } from "@/components/base/SHSpinner";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";

import CharmShareCustomizeSheet from "../../_components/CharmShareCustomizeSheet";
import useHoroscope from "../../_hooks/useHoroscope";

export default function DailyHoroscopePage() {
  const { fetchTodayHoroscope } = useHoroscope();

  const { isPending, data } = fetchTodayHoroscope;

  return (
    <VStack className="h-full w-full overflow-auto bg-[url('/imgs/home_bg.svg')] bg-cover bg-no-repeat">
      <VStack className="h-full w-full bg-[url('/imgs/home_bg_universe.svg')] bg-cover bg-no-repeat">
        {isPending ? (
          <SHGlobalSpinner />
        ) : (
          <>
            <VStack className="mt-[50px] items-center gap-[5px]">
              <SHLabel
                type="Body2"
                className="pm-[10px] flex h-[28px] w-[120px] items-center justify-center rounded-[120px] bg-main-purple-suho py-[5px] text-white "
              >
                {data?.today}
              </SHLabel>
              <VStack className="mb-[-20px] h-[200px] shrink-0">
                {data?.imageUrl && (
                  <SHImage
                    src={data.imageUrl}
                    size="230px"
                    fallbackElement={<div></div>}
                    className="h-[230px] w-[230px]"
                  />
                )}
              </VStack>
            </VStack>
            <VStack className="mt-[-60px] h-full w-full bg-[url('/imgs/home_tree_bottom.svg')] bg-cover bg-no-repeat">
              <VStack className="mt-[80px] gap-[20px] px-[20px] pb-[200px]">
                <SHCard className="py-[44px]">
                  <VStack className="gap-[10px]">
                    <SHLabel className="text-[18px] font-[800] text-main-purple-suho">
                      {data?.gptResponse.dailyHoroscopeTitle}
                    </SHLabel>
                    <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#808991]">
                      {data?.gptResponse.dailyHoroscope}
                    </SHLabel>
                  </VStack>
                </SHCard>
                {/* 애정, 소망, 직업, 금전운 */}
                <SHCard className="gap-[46px] py-[44px]">
                  <VStack className="gap-[10px]">
                    <HStack className="items-center gap-[10px]">
                      <SHImage
                        src="/imgs/icons/ic_love.svg"
                        size="24px"
                        fallbackElement={<div className="bg-gray-500"></div>}
                      />
                      <SHLabel type="SubTitle2">애정운</SHLabel>
                    </HStack>
                    <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#808991]">
                      {data?.gptResponse.affectionHoroscope}
                    </SHLabel>
                  </VStack>
                  <VStack className="gap-[10px]">
                    <HStack className="items-center gap-[10px]">
                      <SHImage
                        src="/imgs/icons/ic_hope.svg"
                        size="24px"
                        fallbackElement={<div className="bg-gray-500"></div>}
                      />
                      <SHLabel type="SubTitle2">소망운</SHLabel>
                    </HStack>
                    <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#808991]">
                      {data?.gptResponse.hopeHoroscope}
                    </SHLabel>
                  </VStack>
                  <VStack className="gap-[10px]">
                    <HStack className="items-center gap-[10px]">
                      <SHImage
                        src="/imgs/icons/ic_job.svg"
                        size="24px"
                        fallbackElement={<div className="bg-gray-500"></div>}
                      />
                      <SHLabel type="SubTitle2">직업운</SHLabel>
                    </HStack>
                    <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#808991]">
                      {data?.gptResponse.businessHoroscope}
                    </SHLabel>
                  </VStack>
                  <VStack className="gap-[10px]">
                    <HStack className="items-center gap-[10px]">
                      <SHImage
                        src="/imgs/icons/ic_money.svg"
                        size="24px"
                        fallbackElement={<div className="bg-gray-500"></div>}
                        className="rounded-none rounded-s-none"
                      />
                      <SHLabel type="SubTitle2">금전운</SHLabel>
                    </HStack>
                    <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#808991]">
                      {data?.gptResponse.moneyHoroscope}
                    </SHLabel>
                  </VStack>
                </SHCard>
                {/* 총평 */}
                <SHCard className="py-[44px]">
                  <VStack className="gap-[16px]">
                    <SHImage
                      src="https://github.com/shad1.png"
                      size="80px"
                      fallbackElement={<div className="bg-gray-500"></div>}
                    />
                    <SHLabel type="SubTitle2" className="whitespace-pre-wrap text-[#525A61]">
                      {`오늘 유진님에게\n`}
                      <span className="text-[#FF6395]">{data?.luckSpirit}의 기운</span>이 행운을
                      가져다줘요.
                    </SHLabel>
                    <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#808991]">
                      {data?.gptResponse.luckSpiritContent}
                    </SHLabel>
                    <CharmShareCustomizeSheet />
                  </VStack>
                </SHCard>
              </VStack>
            </VStack>
          </>
        )}
      </VStack>
    </VStack>
  );
}
