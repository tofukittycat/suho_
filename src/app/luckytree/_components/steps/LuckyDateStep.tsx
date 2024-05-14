import { useState } from "react";

import SHLabel from "@/components/base/SHLabel";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

type LuckyDateStepProps = {
  onClickSubmit: () => void;
};

export default function LuckyDateStep({ onClickSubmit }: LuckyDateStepProps) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <>
      <VStack className="mx-[20px]">
        {/* Header */}
        <HStack className="mt-[40px] h-[60px] items-end justify-between ">
          <VStack>
            <SHLabel className="text-[24px] font-[800] text-white">
              <div className="text-[#B49FFF]">행운이 필요한</div>날짜를 선택해주세요.
            </SHLabel>
          </VStack>
        </HStack>
      </VStack>
      {/* Tree BG */}
      <VStack wFull hFull className="mt-[10px]">
        {/* Tree BG_Top */}
        <VStack className="mx-[50px] mb-[-26px] pt-[40px]">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="z-20 w-full rounded-md border border-[#40407C] bg-[#0B082B] text-white"
          />
        </VStack>
        {/* Tree BG_BOTTOM */}
        <VStack className="h-full w-full bg-[url('/imgs/home_tree_bottom.svg')] bg-cover bg-no-repeat">
          <VStack className="mx-[20px] mt-[80px]">
            <Button
              className={`h-[54px] w-full rounded-[15px] bg-main-purple-suho text-[16px] font-[600] text-white hover:bg-[#7553f0]`}
              onClick={onClickSubmit}
            >
              다음
            </Button>
          </VStack>
        </VStack>
      </VStack>
    </>
  );
}
