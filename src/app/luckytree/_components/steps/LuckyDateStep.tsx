import { useState } from "react";

import CTAContainer from "@/components/CTAContainer";
import NavFooter from "@/components/NavFooter";
import SHLabel from "@/components/base/SHLabel";
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
    const selectedDate = dayjs(date);
    const yesterday = dayjs().set("date", dayjs().date() - 1);

    if (date) {
      // ex) 2024-05-17
      const formatedDate = dayjs(date).format("YYYY-MM-DD");
      setDate(date);

      // 오늘부터 선택 가능
      if (selectedDate.isBefore(yesterday)) {
        toast({ description: "오늘부터 선택이 가능합니다." });
        updateFields({ luckyDate: null });
        return;
      }

      updateFields({ luckyDate: formatedDate });
    }
  };

  return (
    <VStack className="h-full w-full overflow-auto px-[20px]">
      <VStack className="mt-[60px]">
        <SHLabel className="text-[24px] font-[800] text-white">
          <div className="text-[#B49FFF]">행운이 필요한</div>날짜를 선택해주세요.
        </SHLabel>
        <VStack className="mx-[50px] mt-[20px] items-center sm:mt-[80px]">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onSelectDate}
            className="max-w-[280px] rounded-md border border-[#40407C] bg-[#0B082B] px-[50px] text-white"
          />
        </VStack>
      </VStack>
      <CTAContainer className="px-0">
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
      </CTAContainer>
    </VStack>
  );
}
