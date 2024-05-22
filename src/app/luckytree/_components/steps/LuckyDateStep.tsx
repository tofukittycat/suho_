import { useState } from "react";

import CTABottomPadding from "@/components/CTABottomPadding";
import NavFooter from "@/components/NavFooter";
import SHLabel from "@/components/base/SHLabel";
import TreeBGView from "@/components/base/bg/TreeBGView";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/components/ui/use-toast";
import dayjs from "dayjs";
import { isEmpty } from "lodash";

import { UseLuckyTreeType } from "../../_hooks/useLuckyTree";

type LuckyDateStepProps = {
  useluckyTree: UseLuckyTreeType;
  onClickSubmit: () => void;
};

export default function LuckyDateStep({ useluckyTree, onClickSubmit }: LuckyDateStepProps) {
  const { router, infoData, updateFields } = useluckyTree;

  const { toast } = useToast();

  const [date, setDate] = useState<Date | undefined>(new Date());

  const onSelectDate = (date: Date | undefined) => {
    if (date) {
      // ex) 2024-05-17
      const formatedDate = dayjs(date).format("YYYY-MM-DD");

      if (!dayjs().isBefore(date)) {
        updateFields({ luckyDate: null });

        toast({ description: "오늘 이후의 날짜를 선택해주세요." });
        return;
      }

      setDate(date);
      updateFields({ luckyDate: formatedDate });
    }
  };

  return (
    <TreeBGView
      className="relative"
      hiddenTree
      treeLayout={
        <VStack className="z-50 h-full w-full justify-between">
          <VStack className="mx-[20px]">
            {/* Header */}
            <HStack className="mt-[40px] items-end justify-between">
              <VStack>
                <SHLabel className="text-[24px] font-[800] text-white">
                  <div className="text-[#B49FFF]">행운이 필요한</div>날짜를 선택해주세요.
                </SHLabel>
              </VStack>
            </HStack>
            <VStack className="mx-[50px] mt-[100px] items-center">
              <Calendar
                mode="single"
                selected={date}
                onSelect={onSelectDate}
                className="max-w-[280px] rounded-md border border-[#40407C] bg-[#0B082B] px-[50px] text-white"
              />
            </VStack>
          </VStack>
        </VStack>
      }
      hillLayout={
        <CTABottomPadding className="mb-[60px]">
          <NavFooter
            ratio="1:3"
            left={{
              children: "이전",
              onClick: router.back,
            }}
            right={{
              children: "다음",
              disabled: isEmpty(infoData.luckyDate),
              onClick: onClickSubmit,
            }}
          />
        </CTABottomPadding>
      }
    />
  );
}
