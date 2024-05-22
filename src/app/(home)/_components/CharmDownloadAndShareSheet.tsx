"use client";

import { IoClose as CloseIcon } from "react-icons/io5";

import NavFooter from "@/components/NavFooter";
import SHImage from "@/components/base/SHImage";
import SHLabel from "@/components/base/SHLabel";
import { SHGlobalSpinner } from "@/components/base/SHSpinner";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { toast } from "@/components/ui/use-toast";
import { TreeCharmItem } from "@/services/home";
import { getTreeCharmDetails } from "@/services/luckytree";
import { QueryKeys } from "@/services/queryKeys";
import { useQuery } from "@tanstack/react-query";

type CharmDownloadAndShareSheetProps = {
  charmData: TreeCharmItem;
};

export default function CharmDownloadAndShareSheet({ charmData }: CharmDownloadAndShareSheetProps) {
  const { charmId, thumbnailUrl, sender } = charmData;

  const { data: charmDetailsData, isPending } = useQuery({
    queryKey: [QueryKeys.TreeCharmsDetails],
    queryFn: () => getTreeCharmDetails({ charmId }),
    staleTime: 0,
  });

  const treeURLCopyToClipboard = async () => {
    const textToCopy = `${process.env.NEXT_PUBLIC_BASE_URL}/home`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      toast({ description: "URL이 복사되었어요!" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Drawer direction="bottom">
      <DrawerTrigger>
        <VStack className="max-h-[70px] w-[50px] max-w-[50px] cursor-pointer items-center bg-none hover:bg-black-purple-suho/10">
          {thumbnailUrl && (
            <SHImage src={thumbnailUrl} fallbackElement={<>부적</>} className="h-[50px] w-[50px]" />
          )}
          <SHLabel className="text-[13px] font-[500] text-white">{sender}</SHLabel>
        </VStack>
      </DrawerTrigger>
      <DrawerContent className="mx-auto flex h-full w-full items-center justify-center rounded-none border-none bg-transparent md:w-[430px]">
        {isPending ? (
          <SHGlobalSpinner />
        ) : (
          <VStack wFull hFull className="bg-black/50 px-[20px] ">
            <HStack className="mt-[38px] justify-end">
              <DrawerClose>
                <CloseIcon className="size-[24px] text-white" />
              </DrawerClose>
            </HStack>
            <VStack className="mt-[20px] shrink-0 items-center justify-center ">
              {charmDetailsData?.imageURL && (
                <SHImage
                  src={charmDetailsData.imageURL}
                  fallbackElement={<div>수호 이미지</div>}
                  className="h-[420px] w-[300px] rounded-[30px] object-contain"
                />
              )}
            </VStack>
            <VStack className="mt-[50px]">
              <NavFooter
                ratio="1:1"
                left={{ children: "공유하기", onClick: treeURLCopyToClipboard }}
                right={{ children: "꾸미러가기" }}
              />
            </VStack>
          </VStack>
        )}
      </DrawerContent>
    </Drawer>
  );
}
