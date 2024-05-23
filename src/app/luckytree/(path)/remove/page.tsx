"use client";

import { IoClose as CloseIcon } from "react-icons/io5";

import useQueryFetchTreeInfo from "@/app/(home)/_hooks/queries/useQueryFetchTreeInfo";
import BottomSheet from "@/components/BottomSheet";
import CTAContainer from "@/components/CTAContainer";
import SHImage from "@/components/base/SHImage";
import SHLabel from "@/components/base/SHLabel";
import { SHGlobalSpinner } from "@/components/base/SHSpinner";
import HStack from "@/components/base/stack/HStack";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";
import useToggle from "@/components/hooks/useToggle";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import dayjs from "dayjs";

import useLuckyTree from "../../_hooks/useLuckyTree";

export default function page() {
  const { router, handleRemoveLuckyTree } = useLuckyTree();
  const { data: treeInfoData, isPending: isTreeInfoPending } = useQueryFetchTreeInfo();

  const { isOpen, open, close } = useToggle();
  const { toast } = useToast();

  const handleClickRemoveCharm = () => {
    if (treeInfoData?.treeId) {
      handleRemoveLuckyTree(treeInfoData.treeId);
    }
  };

  return (
    <>
      {isTreeInfoPending ? (
        <SHGlobalSpinner />
      ) : (
        <VStack className="h-full px-[20px]">
          {/* Title */}
          <div className="mt-[60px]">
            <VStack>
              <SHLabel className="text-[20px] font-[700] text-white">내 행운나무 설정</SHLabel>
              <SHLabel className="mt-[12px] whitespace-pre-line text-[14px] font-[500] text-[#D1D5D9]">
                {`행운나무는 한번에 한개만 만들 수 있어요.
          다른 날 행운이 필요하다면 삭제 후,
          새로운 행운나무를 만들 수 있어요.
          *새로 만들시 기존에 있는 행운나무와 부적은 삭제돼요.`}
              </SHLabel>
            </VStack>
          </div>
          {/* Date */}
          <VStack className="mt-[32px] gap-[3px]">
            <SHLabel className="text-[13px] font-[500] text-[#B8BFC4]">행운이 필요한 날짜</SHLabel>
            <SHLabel className="mt-[3px] text-[20px] font-[500] text-white">
              {dayjs(treeInfoData?.date ?? "").format("YYYY. MM. DD")}
            </SHLabel>
            <SHLabel className="text-[12px] font-[500] text-[#A48AFF]">
              날짜는 수정이 불가능하며 다른 날 행운이 필요하다면 새로 만들어주세요.
            </SHLabel>
          </VStack>
          {/* 카테고리 */}
          <VStack className="mt-[32px] gap-[7px]">
            <SHLabel className="text-[13px] font-[500] text-[#B8BFC4]">행운이 필요한 이유</SHLabel>
            <SHLabel className="text-[20px] font-[500] text-white">{treeInfoData?.tag}</SHLabel>
          </VStack>
          {/* CTA */}
          <CTAContainer className="px-0">
            <HStack className="h-[54px] w-full items-center justify-between gap-[10px]">
              <Button
                onClick={router.back}
                className={`h-full w-full rounded-[15px] bg-[#E4DCFF] text-[16px] font-[600] text-main-purple-suho hover:bg-[#d9d0f4]`}
              >
                이전
              </Button>
              <Button
                onClick={open}
                className="h-full w-full rounded-[15px] bg-[#EB5847] text-[16px] font-[600] text-white hover:bg-[#da5445]"
              >
                삭제하기
              </Button>
              {/* <ConfirmDeletionSheet /> */}
            </HStack>
          </CTAContainer>
        </VStack>
      )}
      {/* Sheets */}
      <BottomSheet isOpen={isOpen} onClose={close}>
        <VStack className="pb-[32px]">
          <HStack className="mr-[16px] mt-[16px] justify-end">
            <CloseIcon className="size-[24px] text-[#ADABC6]" onClick={close} />
          </HStack>
          <VCStack>
            <SHImage src="/imgs/icons/ic_sheet_tree.svg" className="h-[100px] w-[100px]" />
            <SHLabel className="mt-[16px] whitespace-pre-wrap text-center font-[600] leading-4 text-[#0B082B]">
              {`행운 나무를 정말 삭제하시겠어요?\n`}
              <span className="text-[#EB5847]">기존의 행운나무와 부적이 모두 삭제돼요.</span>
            </SHLabel>
          </VCStack>

          <HStack className="mt-[25px] h-[49px] w-full items-center justify-between gap-[10px] px-[15px]">
            <Button
              onClick={close}
              className={`h-full w-full rounded-[15px] bg-[#E4DCFF] text-[16px] font-[600] text-main-purple-suho hover:bg-[#d9d0f4]`}
            >
              아니요, 유지할게요
            </Button>
            <Button
              onClick={handleClickRemoveCharm}
              className="h-full w-full rounded-[15px] bg-[#EB5847] text-[16px] font-[600] text-white hover:bg-[#da5445]"
            >
              삭제할게요
            </Button>
          </HStack>
        </VStack>
      </BottomSheet>
    </>
  );
}
