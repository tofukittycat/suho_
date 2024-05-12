"use client";

import SHCard from "@/components/base/SHCard";
import SHImage from "@/components/base/SHImage";
import SHLabel from "@/components/base/SHLabel";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";

import CharmShareCustomizeDrawer from "../../@components/CharmShareCustomizeDrawer";

// import useHoroscope from "../../@hooks/useHoroscope";

export default function page() {
  // const {} = useHoroscope();

  return (
    <VStack className="h-full w-full overflow-auto bg-[url('/imgs/home_bg.svg')] bg-cover bg-no-repeat">
      <VStack className="h-full w-full bg-[url('/imgs/home_bg_universe.svg')] bg-cover bg-no-repeat">
        <VStack className="mt-[50px] items-center gap-[5px]">
          <SHLabel
            type="Body2"
            className="pm-[10px] flex h-[28px] w-[120px] items-center justify-center rounded-[120px] bg-main-purple-suho py-[5px] text-white "
          >
            4월 20일 토요일
          </SHLabel>
          <VStack className="mb-[-20px] h-[200px] shrink-0">
            <SHImage
              src=""
              size="230px"
              fallbackElement={<div> </div>}
              className="h-[230px] w-[230px]"
            />
          </VStack>
        </VStack>
        <VStack className="mt-[-60px] h-full w-full bg-[url('/imgs/home_tree_bottom.svg')] bg-cover bg-no-repeat">
          <VStack className="mt-[80px] gap-[20px] px-[20px] pb-[200px]">
            <SHCard className="py-[44px]">
              <VStack className="gap-[10px]">
                <SHLabel className="text-[18px] font-[800] text-main-purple-suho">
                  현재 업무에 온 힘을 다하세요.
                </SHLabel>
                <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#808991]">
                  분주하게 움직이며 큰 일을 준비하셨군요. 현재 하고 있는 일에 집중해 주세요. 행운과
                  휴식이 곧 찾아올 거예요. 일이 마무리 단계에 접어들면서 결과는 처음 생각했던 것보다
                  조금 못 미치지만, 충분히 만족스러울 만큼 잘 풀렸어요. 주변 사람들로부터 축하받을
                  준비를 하세요. 이제 조금은 자신만을 위한 시간을 가져도 좋습니다. 그동안 쏟은
                  열정과 의지에 휴식으로 보답할 때예요. 조금 소홀했던 분들에게 감사의 마음을 전해
                  보세요. 건강 관리도 잊지 마세요, 검진은 필수랍니다. 오늘의 행운 키워드는
                  '휴식'입니다.
                </SHLabel>
              </VStack>
            </SHCard>
            {/* 애정, 소망, 직업, 금전운 */}
            <SHCard className="gap-[46px] py-[44px]">
              <VStack className="gap-[10px]">
                <HStack className="items-center gap-[10px]">
                  <SHImage
                    src="https://github.com111/shad1.png"
                    size="24px"
                    fallbackElement={<div className="bg-gray-500"></div>}
                  />
                  <SHLabel type="SubTitle2">애정운</SHLabel>
                </HStack>
                <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#808991]">
                  미혼 남녀분들은 화려한 연애는 아니지만, 가족처럼 편안한 사랑을 키워갈 수 있을
                  거예요. 하지만 상대가 편하다고 해서 성급하게 결혼을 결정하면 후회할 수 있으니
                  조심하세요. 커플이신 분들은 당분간 좋은 관계를 유지하실 것 같네요.
                </SHLabel>
              </VStack>
              <VStack className="gap-[10px]">
                <HStack className="items-center gap-[10px]">
                  <SHImage
                    src="https://github.com111/shad1.png"
                    size="24px"
                    fallbackElement={<div className="bg-gray-500"></div>}
                  />
                  <SHLabel type="SubTitle2">소망운</SHLabel>
                </HStack>
                <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#808991]">
                  첫 술에 배부를 수는 없어요. 오늘의 운세가 그리 좋지 않으니 큰 욕심을 부리지
                  마세요. 욕심을 버리고 성실히 임하면 좋은 결과가 있을 거예요. 조바심 내지 말고
                  차분하게 마음의 여유를 가져보세요. 서두르지 말고 지금 하고 있는 일에 집중하면
                  시간이 걸리더라도 좋은 성과가 있을 거예요.
                </SHLabel>
              </VStack>
              <VStack className="gap-[10px]">
                <HStack className="items-center gap-[10px]">
                  <SHImage
                    src="https://github.com111/shad1.png"
                    size="24px"
                    fallbackElement={<div className="bg-gray-500"></div>}
                  />
                  <SHLabel type="SubTitle2">직업운</SHLabel>
                </HStack>
                <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#808991]">
                  특별한 일은 없지만, 서비스 업무를 하시는 분들은 오늘 하루종일 전화 문의가 많을 수
                  있으니 미리 약을 준비하는 것도 좋겠습니다. 자영업을 하시는 분들 중에서 분점이나
                  지점을 운영하시는 분들은 본사의 갑작스러운 점검이 있을 수 있으니 청결과 서비스
                  상태를 항상 점검하세요.
                </SHLabel>
              </VStack>
              <VStack className="gap-[10px]">
                <HStack className="items-center gap-[10px]">
                  <SHImage
                    src="https://github.com111/shad1.png"
                    size="24px"
                    fallbackElement={<div className="bg-gray-500"></div>}
                    className="rounded-none rounded-s-none"
                  />
                  <SHLabel type="SubTitle2">금전운</SHLabel>
                </HStack>
                <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#808991]">
                  욕심 때문에 실수를 할 수 있으니 주의하세요. 욕심을 조금만 줄이고 수입과 지출을 잘
                  관리하면 평소보다 많은 이익을 볼 수 있어요. 하지만 이 이익을 도박 같은 곳에
                  사용하면 모두 잃을 수 있으니 조심하세요.
                </SHLabel>
              </VStack>
            </SHCard>
            {/* 총평 */}
            <SHCard className="py-[44px]">
              <VStack className="gap-[16px]">
                <SHImage
                  src="https://github.com111/shad1.png"
                  size="80px"
                  fallbackElement={<div className="bg-gray-500"></div>}
                />
                <SHLabel type="SubTitle2" className="whitespace-pre-wrap text-[#525A61]">
                  {`오늘 유진님에게\n`}
                  <span className="text-[#FF6395]">불의 기운</span>이 행운을 가져다줘요.
                </SHLabel>
                <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#808991]">
                  분주하게 움직이며 큰 일을 준비하셨군요. 현재 하고 있는 일에 집중해 주세요. 행운과
                  휴식이 곧 찾아올 거예요. 일이 마무리 단계에 접어들면서 결과는 처음 생각했던 것보다
                  조금 못 미치지만, 충분히 만족스러울 만큼 잘 풀렸어요.
                </SHLabel>
                <CharmShareCustomizeDrawer />
              </VStack>
            </SHCard>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
}
