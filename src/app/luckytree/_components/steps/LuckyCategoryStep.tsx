import NavFooter from "@/components/NavFooter";
import SHLabel from "@/components/base/SHLabel";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import { Button } from "@/components/ui/button";

import LuckyAddCategorySheet from "../LuckyAddCategorySheet";

type LuckyCategoryStepProps = {
  onClickSubmit: () => void;
};

const categoryItems = [
  "직접 입력하기+",
  "시험",
  "면접",
  "모의고사",
  "취업",
  "고백",
  "수능",
  "로또",
  "프로포즈",
  "합격",
  "당첨",
  "발표",
  "경기",
];

export default function LuckyCategoryStep({ onClickSubmit }: LuckyCategoryStepProps) {
  return (
    <>
      <VStack className="mx-[20px]">
        {/* Header */}
        <HStack className="mt-[40px] h-[60px] items-end justify-between ">
          <VStack>
            <SHLabel className="whitespace-pre-line text-[24px] font-[800] text-white">
              {`그 날 행운이\n필요한 이유는 뭔가요?`}
            </SHLabel>
          </VStack>
        </HStack>
      </VStack>
      {/* Tree BG */}
      <VStack wFull hFull className="mt-[10px]">
        {/* Tree BG_Top */}
        <HStack className="z-20 mx-[20px] mb-[-26px] flex-wrap justify-start pt-[40px]">
          {categoryItems.map(item => {
            if (item === "직접 입력하기+") {
              return <LuckyAddCategorySheet />;
            }

            return (
              <Button className="my-[8px] mr-[6px] rounded-[20px] bg-[#0B082B] px-[15px] py-[3px] hover:bg-[#0B082B]/50 focus:bg-main-purple-suho">
                {item}
              </Button>
            );
          })}
        </HStack>
        {/* Tree BG_BOTTOM */}
        <VStack className="h-full w-full bg-[url('/imgs/home_tree_bottom.svg')] bg-cover bg-no-repeat">
          <VStack className="mx-[20px] mt-[80px]">
            <NavFooter
              ratio="1:3"
              left={{
                title: "이전",
                onClick: () => {},
              }}
              right={{
                title: "다음",
                onClick: onClickSubmit,
              }}
            />
          </VStack>
        </VStack>
      </VStack>
    </>
  );
}
