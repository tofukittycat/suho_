"use client";

import SHCard from "@/components/base/SHCard";
import SHImage from "@/components/base/SHImage";
import SHLabel from "@/components/base/SHLabel";
import VStack from "@/components/base/stack/VStack";
import { Button } from "@/components/ui/button";

import useLuckyTree from "../../_hooks/useLuckyTree";

// type pageProps = {};

export default function page() {
  const { handleGoToHome } = useLuckyTree();

  return (
    <VStack className="h-full w-full overflow-auto bg-[url('/imgs/home_bg.svg')] bg-cover bg-no-repeat">
      <VStack className="h-full w-full bg-[url('/imgs/home_bg_universe.svg')] bg-cover bg-no-repeat">
        <VStack className="mt-[50px] items-center gap-[5px]">
          <SHLabel
            type="Body2"
            className="pm-[10px] flex h-[28px] w-[120px] items-center justify-center rounded-[120px] bg-main-purple-suho py-[5px] text-white "
          >
            5월 8일의 행운 기운
          </SHLabel>
          <VStack className="mb-[-20px] mt-[26px] shrink-0">
            <SHImage
              src=""
              fallbackElement={<div>123</div>}
              className="h-[400px] w-[300px] rounded-[30px]"
            />
          </VStack>
        </VStack>
        <VStack className="mt-[-60px] h-full w-full bg-[url('/imgs/home_tree_bottom.svg')] bg-cover bg-no-repeat">
          <VStack className="mt-[80px] gap-[20px] px-[20px] pb-[200px]">
            <SHLabel className="mx-[30px] mt-[30px] whitespace-pre-wrap text-center text-[16px] font-[500] text-[#0B082B]">
              희진님의 수호동물은 붉은 토끼에요. 모닥불의 기운을 타고 태어난 붉은 토끼는 따뜻한
              심성을 가지고 있으며 온순하고 활발해요.
            </SHLabel>

            {/* 총평 */}
            <SHCard className="mt-[30px] py-[44px]">
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
                <Button
                  className="h-[54px] w-full rounded-[15px] bg-main-purple-suho text-[16px] font-[600] text-white hover:bg-[#7553f0]"
                  onClick={handleGoToHome}
                >
                  내 행운 나무 보러가기
                </Button>
              </VStack>
            </SHCard>
          </VStack>
        </VStack>
      </VStack>
    </VStack>
  );
}
