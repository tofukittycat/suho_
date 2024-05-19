"use client";

// import useLuckyTree from "@/app/luckytree/_hooks/useLuckyTree";
import HDivider from "@/components/HDivider";
import SHLabel from "@/components/base/SHLabel";
import TreeBGView from "@/components/base/bg/TreeBGView";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import { Button } from "@/components/ui/button";

import ConfirmDeletionSheet from "../../_components/ConfirmDeletionSheet";

export default function page() {
  // const { router } = useLuckyTree();

  return (
    <VStack className="relative h-full">
      <TreeBGView hiddenTree />
      {/* Header */}
      <VStack className=" z-10 mt-[40px] gap-[30px] px-[20px]">
        {/* Title */}
        <VStack>
          <SHLabel className="text-[20px] font-[700] text-white">내 행운나무 설정</SHLabel>
          <SHLabel className="mt-[12px] whitespace-pre-line text-[14px] font-[500] text-[#D1D5D9]">
            {`행운나무는 한번에 한개만 만들 수 있어요.
            다른 날 행운이 필요하다면 삭제 후,
            새로운 행운나무를 만들 수 있어요.
            *새로 만들시 기존에 있는 행운나무와 부적은 삭제돼요.`}
          </SHLabel>
        </VStack>
        {/* Date */}
        <VStack className="gap-[3px]">
          <SHLabel className="text-[13px] font-[500] text-[#B8BFC4]">행운이 필요한 날짜</SHLabel>
          <SHLabel className="mt-[3px] text-[20px] font-[500] text-white">2024. 05. 08</SHLabel>
          <SHLabel className="text-[12px] font-[500] text-[#A48AFF]">
            날짜는 수정이 불가능하며 다른 날 행운이 필요하다면 새로 만들어주세요.
          </SHLabel>
        </VStack>
        {/* 카테고리 */}
        <VStack className="gap-[7px]">
          <SHLabel className="text-[13px] font-[500] text-[#B8BFC4]">행운이 필요한 이유</SHLabel>
          <SHLabel className="text-[20px] font-[500] text-white">6월 모의고사</SHLabel>
          <HDivider className="bg-[#B8BFC4]" />
        </VStack>
        {/* CTA */}
        <VStack className="mt-[50px]">
          <HStack className="h-[54px] w-full items-center justify-between gap-[10px]">
            <Button
              className={`h-full w-full rounded-[15px] bg-[#E4DCFF] text-[16px] font-[600] text-main-purple-suho hover:bg-[#d9d0f4]`}
            >
              이전
            </Button>
            <ConfirmDeletionSheet />
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
}
//
