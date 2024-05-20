import CTABottomPadding from "@/components/CTABottomPadding";
import NavFooter from "@/components/NavFooter";
import SHLabel from "@/components/base/SHLabel";
import TreeBGView from "@/components/base/bg/TreeBGView";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { isEmpty } from "lodash";

import { UseLuckyTreeType } from "../../_hooks/useLuckyTree";
import LuckyAddCategorySheet from "../LuckyAddCategorySheet";

type LuckyCategoryStepProps = {
  useluckyTree: UseLuckyTreeType;
  onClickSubmit: () => void;
  onClickBack: () => void;
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

export default function LuckyCategoryStep({
  useluckyTree,
  onClickSubmit,
  onClickBack,
}: LuckyCategoryStepProps) {
  const { infoData, updateFields } = useluckyTree;

  const onClickCategory = (category: string) => {
    updateFields({ tag: category });
  };

  return (
    <TreeBGView
      className="relative"
      hiddenTree
      treeLayout={
        <VStack className="z-30 h-full w-full justify-between">
          <VStack className="mx-[20px]">
            {/* Header */}
            <HStack className="mt-[40px] items-end justify-between">
              <VStack>
                <SHLabel className="whitespace-pre-line text-[24px] font-[800] text-white">
                  {`그 날 행운이\n필요한 이유는 뭔가요?`}
                </SHLabel>
              </VStack>
            </HStack>
            <HStack className="z-20 mt-[100px] flex-wrap justify-start">
              {categoryItems.map(item => {
                if (item === "직접 입력하기+") {
                  return (
                    <div onClick={() => updateFields({ tag: null })}>
                      <LuckyAddCategorySheet useluckyTree={useluckyTree} />
                    </div>
                  );
                }
                return (
                  <Button
                    className={cn(
                      "my-[8px] mr-[6px] rounded-[20px] bg-[#0B082B] text-[18px] font-[500] hover:bg-[#0B082B]/50 focus:bg-main-purple-suho",
                      infoData.tag === item && "bg-main-purple-suho",
                    )}
                    onClick={() => onClickCategory(item)}
                  >
                    {item}
                  </Button>
                );
              })}
            </HStack>
          </VStack>
        </VStack>
      }
      hillLayout={
        <CTABottomPadding className="mb-[60px]">
          <NavFooter
            ratio="1:3"
            left={{
              children: "이전",
              onClick: onClickBack,
            }}
            right={{
              children: "다음",
              disabled: isEmpty(infoData.tag),
              onClick: onClickSubmit,
            }}
          />
        </CTABottomPadding>
      }
    />
  );
}
