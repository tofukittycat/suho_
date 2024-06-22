import { useMemo } from "react";
import { MdOpenInNew } from "react-icons/md";

import SHImage from "@/components/base/SHImage";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import { Label } from "@/components/ui/label";
import dayjs from "dayjs";

type LuckyBoxProps = {
  date: string;
  onClick: () => void;
};

export default function LuckyBox({ date, onClick }: LuckyBoxProps) {
  const handleClick = () => {
    onClick();
  };

  return (
    <VStack className="bg-transparent">
      {/* 날짜 */}
      <HStack className="cursor-pointer items-center justify-center gap-[2px] rounded-[10px] bg-white/70 px-[8px] py-[4px]">
        <Label
          onClick={handleClick}
          className="cursor-pointer text-center text-[10px] font-[600] text-main-purple-suho"
        >
          행운 부적 만들기
        </Label>
        <MdOpenInNew className="size-[13px] text-main-purple-suho" />
      </HStack>
      {/* Box */}
      <HStack onClick={handleClick} className="mx-auto cursor-pointer">
        <SHImage src="/imgs/icons/ic_luckybox.svg" className="" />
      </HStack>
    </VStack>
  );
}
