"use client";

import { isMobileSafari } from "react-device-detect";
import { IoClose as CloseIcon } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

import { fileDownload } from "@/app/horoscope/_components/CharmCustomizeSheet";
import BottomSheet from "@/components/BottomSheet";
import CTAContainer from "@/components/CTAContainer";
import SHImage from "@/components/base/SHImage";
import SHLabel from "@/components/base/SHLabel";
import { SHGlobalSpinner } from "@/components/base/SHSpinner";
import HStack from "@/components/base/stack/HStack";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";
import useAppRepository from "@/components/hooks/useAppRepository";
import useToggle from "@/components/hooks/useToggle";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { toast } from "@/components/ui/use-toast";
import { TreeCharmItem } from "@/services/home";
import { getTreeCharmDetails } from "@/services/luckytree";
import { QueryKeys } from "@/services/queryKeys";
import { fileNameByURL } from "@/utils/utils";
import { useQuery } from "@tanstack/react-query";

import InvisibleCheckCharmSheet from "./InvisibleCheckCharmSheet";
import useMutateRemoveCharm from "./useMutateRemoveCharm";

type CharmDownloadAndShareSheetProps = {
  charmData: TreeCharmItem;
  visibleCharm: boolean;
};

export default function CharmDownloadAndShareSheet({
  charmData,
  visibleCharm,
}: CharmDownloadAndShareSheetProps) {
  const { charmId, thumbnailUrl, sender } = charmData;

  const {
    userInfoStore: [userInfo],
  } = useAppRepository();

  const {
    isOpen: isOpenRemoveCharmCheckSheet,
    open: openRemoveCharmCheckSheet,
    close: closeRemoveCharmCheckSheet,
  } = useToggle();

  const { isOpen: isOpenDrawer, open: openDrawer, close: closeDrawer } = useToggle();

  const { data: charmDetailsData, isPending } = useQuery({
    queryKey: [QueryKeys.TreeCharmsDetails, charmId],
    queryFn: () => getTreeCharmDetails({ charmId }),
    staleTime: 0,
  });

  const handleRemoveCharm = () => {
    openRemoveCharmCheckSheet();
  };

  const treeURLCopyToClipboard = async () => {
    const textToCopy = `${process.env.NEXT_PUBLIC_BASE_URL}/home`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      toast({ description: "URL이 복사되었어요!" });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDownload = () => {
    const imageURL = charmDetailsData?.imageURL;

    if (imageURL) {
      fileDownload(imageURL, fileNameByURL(imageURL));
    }
  };

  return (
    <Drawer direction="bottom" open={isOpenDrawer} onClose={closeDrawer}>
      <DrawerTrigger onClick={openDrawer}>
        <VStack className="pointer-events-none max-h-[70px] w-[50px] max-w-[50px] cursor-pointer items-center bg-none hover:bg-black-purple-suho/10">
          {thumbnailUrl &&
            (isMobileSafari ? (
              <object data={thumbnailUrl} className="h-[50px] w-[50px]" />
            ) : (
              <SHImage src={thumbnailUrl} className="h-[50px] w-[50px]" />
            ))}
          <SHLabel className="text-[13px] font-[500] text-white">{sender}</SHLabel>
        </VStack>
      </DrawerTrigger>
      <DrawerContent className="mx-auto flex h-full w-full items-center justify-center rounded-none border-none bg-transparent md:w-[430px]">
        {visibleCharm ? (
          isPending ? (
            <SHGlobalSpinner />
          ) : (
            <VStack wFull hFull className="bg-black/50 px-[20px]">
              <HStack className="mt-[38px] justify-between">
                <div className="size-[24px]"></div>
                {userInfo.owner && (
                  <RiDeleteBin6Line
                    onClick={handleRemoveCharm}
                    className="size-[24px] cursor-pointer text-white"
                  />
                )}
                <DrawerClose onClick={closeDrawer}>
                  <CloseIcon className="size-[24px] text-white" />
                </DrawerClose>
              </HStack>
              <VStack className="mt-[20px] shrink-0 items-center justify-center ">
                {charmDetailsData?.imageURL && (
                  <SHImage
                    src={charmDetailsData.imageURL}
                    className="h-[400px] w-[270px] rounded-[30px] object-contain"
                  />
                )}
              </VStack>
              <CTAContainer className="px-0">
                <Button
                  className={` mt-[20px] h-[54px] rounded-[15px] bg-main-purple-suho text-[16px] font-[600] text-white hover:bg-[#7553f0]`}
                  onClick={handleDownload}
                >
                  다운로드
                </Button>
              </CTAContainer>
              <RemoveCharmCheckSheet
                charmId={charmId}
                isOpenRemoveCharmCheckSheet={isOpenRemoveCharmCheckSheet}
                closeRemoveCharmCheckSheet={closeRemoveCharmCheckSheet}
                closeDrawer={closeDrawer}
              />
            </VStack>
          )
        ) : (
          <InvisibleCheckCharmSheet closeDrawer={closeDrawer} />
        )}
      </DrawerContent>
    </Drawer>
  );
}

// Components

function RemoveCharmCheckSheet({
  charmId,
  isOpenRemoveCharmCheckSheet,
  closeRemoveCharmCheckSheet,
  closeDrawer,
}: {
  charmId: number;
  isOpenRemoveCharmCheckSheet: boolean;
  closeRemoveCharmCheckSheet: () => void;
  closeDrawer: () => void;
}) {
  const { mutate: removeCharm } = useMutateRemoveCharm();

  const handleClickRemoveCharm = () => {
    removeCharm(
      { charmId },
      {
        onSuccess: () => {
          closeDrawer();

          toast({
            duration: 3000,
            description: "행운부적이 삭제되었어요",
          });
        },
      },
    );
  };

  return (
    <VStack className="z-[100]">
      <BottomSheet isOpen={isOpenRemoveCharmCheckSheet} onClose={closeRemoveCharmCheckSheet}>
        <VStack className="pb-[32px]">
          <HStack className="mr-[16px] mt-[16px] justify-end">
            <CloseIcon
              className="size-[24px] text-[#ADABC6]"
              onClick={closeRemoveCharmCheckSheet}
            />
          </HStack>
          <VCStack>
            <SHImage src="/imgs/icons/ic_sheet_tree.svg" className="h-[100px] w-[100px]" />
            <SHLabel className="mt-[16px] whitespace-pre-wrap text-center font-[600] leading-4 text-[#0B082B]">
              {`이 행운 부적을 정말 삭제하시겠어요?\n`}
              <span className="text-[#EB5847]">삭제하면 다시 복구할 수 없습니다.</span>
            </SHLabel>
          </VCStack>

          <HStack className="mt-[25px] h-[49px] w-full items-center justify-between gap-[10px] px-[15px]">
            <Button
              onClick={closeRemoveCharmCheckSheet}
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
    </VStack>
  );
}
