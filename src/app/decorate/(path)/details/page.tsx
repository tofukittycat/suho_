"use client";

import { triggerBase64Download } from "react-base64-downloader";
import { IoClose as CloseIcon } from "react-icons/io5";

import BottomSheet from "@/components/BottomSheet";
import SHImage from "@/components/base/SHImage";
import SHLabel from "@/components/base/SHLabel";
import HStack from "@/components/base/stack/HStack";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";
import useAppRepository from "@/components/hooks/useAppRepository";
import useToggle from "@/components/hooks/useToggle";
import { Button } from "@/components/ui/button";

export default function page() {
  const { isOpen, open, close } = useToggle();

  const {
    decorateInfoStore: [decorateInfo, setDecorateInfo],
  } = useAppRepository();

  const handleClose = () => {
    open();
  };

  const handleDownload = () => {
    triggerBase64Download(decorateInfo.imageURL, "onsuho.png");
  };

  return (
    <>
      <VStack wFull hFull>
        <HStack sx={{ justifyContent: "flex-end", mt: "44px", mr: "20px" }}>
          <CloseIcon className="size-[24px] text-white" onClick={handleClose} />
        </HStack>
        <SHImage src={decorateInfo.imageURL} className="mx-auto mt-[20px] h-[485px] w-[319px]" />
        <Button
          className={`mx-[20px] mt-[20px] h-[54px] rounded-[15px] bg-main-purple-suho text-[16px] font-[600] text-white hover:bg-[#7553f0]`}
          onClick={handleDownload}
        >
          다운로드
        </Button>
      </VStack>
      <BottomSheet isOpen={isOpen} onClose={close}>
        <VStack className="pb-[32px]">
          <VCStack className="mt-[16px]">
            <SHImage src="/imgs/icons/ic_sheet_tree.svg" className="h-[100px] w-[100px]" />
            <SHLabel className="mt-[16px] whitespace-pre-wrap text-center font-[600] leading-4 text-[#0B082B]">
              {`꾸민 데일리 행운 부적은 \n`}
              <span className="text-[#0B082B]">{`따로 `}</span>
              <span className="text-[#EB5847]">{`저장되지 않아요.\n`}</span>
              <SHLabel className="mt-[16px] whitespace-pre-wrap text-center font-[600] leading-4 text-[#0B082B]">
                {`다운로드 받지 않고 \n이 화면에서 나가시겠어요?`}
              </SHLabel>
            </SHLabel>
          </VCStack>

          <HStack className="mt-[25px] h-[49px] w-full items-center justify-between gap-[10px] px-[15px]">
            <Button
              onClick={close}
              className={`h-full w-full rounded-[15px] bg-[#E4DCFF] text-[16px] font-[600] text-main-purple-suho hover:bg-[#d9d0f4]`}
            >
              이전으로
            </Button>
            <Button
              onClick={() => {}}
              className="h-full w-full rounded-[15px] bg-[#EB5847] text-[16px] font-[600] text-white hover:bg-[#da5445]"
            >
              나갈게요
            </Button>
          </HStack>
        </VStack>
      </BottomSheet>
    </>
  );
}
