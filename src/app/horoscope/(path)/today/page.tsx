"use client";

import ElementalLottie from "@/components/ElementalLottie";
import SHCard from "@/components/base/SHCard";
import SHImage from "@/components/base/SHImage";
import SHLabel from "@/components/base/SHLabel";
import HStack from "@/components/base/stack/HStack";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";
import useAppRepository from "@/components/hooks/useAppRepository";

import CharmCustomizeSheet from "../../_components/CharmCustomizeSheet";
import HoroscopeResultPending from "../../_components/HoroscopeResultPending";
import useQueryFetchTodayHoroscope from "../../_hooks/queries/useQueryFetchTodayHoroscope";

export default function DailyHoroscopePage() {
  const { data, isPending } = useQueryFetchTodayHoroscope();
  const {
    userInfoStore: [userInfo],
  } = useAppRepository();

  return (
    <VStack className="h-full w-full overflow-auto">
      {isPending ? (
        <HoroscopeResultPending />
      ) : (
        <>
          {data && (
            <VStack className="mt-[60px] px-[20px]">
              {/* 수호 이미지 */}
              <VCStack className="shrink-0">
                {data?.imageUrl && <SHImage src={data.imageUrl} size="270px" />}
              </VCStack>

              <VStack className="mt-[-35px] gap-[20px] pb-[100px]">
                {/* 데일리 운세 Card */}
                <SHCard className="bg-[#0B082B] py-[44px]">
                  <VStack className="gap-[10px]">
                    <SHLabel className="text-[18px] font-[800] text-[#A48AFF]">오늘의 운세</SHLabel>
                    <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#E6E8EB]">
                      {data?.gptResponse.dailyHoroscope}
                    </SHLabel>
                  </VStack>
                </SHCard>

                {/* 애정, 소망, 직업, 금전운 */}
                <SHCard className="gap-[46px] bg-[#0B082B] pb-[60px] pt-[26px]">
                  <VStack className="gap-[10px]">
                    <HStack className="items-center gap-[5px]">
                      <SHImage
                        src="/imgs/icons/ic_love.svg"
                        className="ml-[-5px] h-[38px] w-[38px]"
                      />
                      <SHLabel type="SubTitle2" className="text-white">
                        애정운
                      </SHLabel>
                    </HStack>
                    <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#E6E8EB]">
                      {data?.gptResponse.affectionHoroscope}
                    </SHLabel>
                  </VStack>
                  <VStack className="gap-[10px]">
                    <HStack className="items-center gap-[3px]">
                      <SHImage
                        src="/imgs/icons/ic_hope.svg"
                        className="ml-[-7px] h-[42px] w-[42px]"
                      />
                      <SHLabel type="SubTitle2" className="text-white">
                        소망운
                      </SHLabel>
                    </HStack>
                    <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#E6E8EB]">
                      {data?.gptResponse.hopeHoroscope}
                    </SHLabel>
                  </VStack>
                  <VStack className="gap-[10px]">
                    <HStack className="items-center gap-[7px]">
                      <SHImage src="/imgs/icons/ic_job.svg" className="h-[30px] w-[30px]" />
                      <SHLabel type="SubTitle2" className="text-white">
                        직업운
                      </SHLabel>
                    </HStack>
                    <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#E6E8EB]">
                      {data?.gptResponse.businessHoroscope}
                    </SHLabel>
                  </VStack>
                  <VStack className="gap-[10px]">
                    <HStack className="items-center gap-[7px]">
                      <SHImage
                        src="/imgs/icons/ic_money.svg"
                        className="ml-[-2px] h-[30px] w-[30px]"
                      />
                      <SHLabel type="SubTitle2" className="text-white">
                        금전운
                      </SHLabel>
                    </HStack>
                    <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#E6E8EB]">
                      {data?.gptResponse.moneyHoroscope}
                    </SHLabel>
                  </VStack>
                </SHCard>

                {/* 총평 */}
                <SHCard className="bg-[#0B082B] py-[44px]">
                  <VStack className="gap-[20px]">
                    <ElementalLottie luckySpirit={data.luckSpirit} />
                    <SHLabel type="SubTitle2" className="whitespace-pre-wrap text-[#E6E8EB]">
                      {data.name && `오늘 ${data.name ?? userInfo.username}님에게\n`}
                      <span className="text-[#A48AFF]">{data?.luckSpirit}의 기운</span>이 행운을
                      가져다줘요.
                    </SHLabel>
                    <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#E6E8EB]">
                      {data?.gptResponse.luckSpiritContent}
                    </SHLabel>
                    {/* 행운 부적 받기 버튼 */}
                    <VStack className="mt-[16px]">
                      <CharmCustomizeSheet onlyDownload={true} />
                    </VStack>
                  </VStack>
                </SHCard>
              </VStack>
            </VStack>
          )}
        </>
      )}
    </VStack>
  );
}
