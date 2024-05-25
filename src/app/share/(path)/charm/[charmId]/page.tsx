"use client";

import { useParams } from "next/navigation";

import { useEffect, useState } from "react";
import { IoClose as CloseIcon } from "react-icons/io5";

import CharmCustomizeSheet from "@/app/horoscope/_components/CharmCustomizeSheet";
import BottomSheet from "@/components/BottomSheet";
import CTAButton from "@/components/CTAButton";
import CTAContainer from "@/components/CTAContainer";
import NavFooter from "@/components/NavFooter";
import SHImage from "@/components/base/SHImage";
import { SHGlobalSpinner } from "@/components/base/SHSpinner";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import useToggle from "@/components/hooks/useToggle";
import { toast } from "@/components/ui/use-toast";
import { getTreeCharmDetails } from "@/services/luckytree";
import { QueryKeys } from "@/services/queryKeys";
import { Backdrop } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export default function page() {
  const params = useParams();
  const { isOpen, open, close } = useToggle();

  const charmId = params.charmId as string;

  const { data: charmDetailsData, isPending } = useQuery({
    queryKey: [QueryKeys.TreeCharmsDetails],
    queryFn: () => getTreeCharmDetails({ charmId: Number(charmId) }),
    staleTime: 0,
    enabled: Boolean(charmId),
  });

  const treeURLCopyToClipboard = async () => {
    const textToCopy = `${process.env.NEXT_PUBLIC_BASE_URL}/share/charm/${charmId}`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      toast({ description: "URL이 복사되었어요!" });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    open();
  }, []);

  return (
    <>
      <Backdrop
        open={isOpen}
        onClick={close}
        className="mx-auto flex h-full w-full items-center justify-center rounded-none border-none bg-transparent md:w-[430px]"
      >
        {isPending ? (
          <SHGlobalSpinner />
        ) : (
          <VStack wFull hFull className="bg-black/50 px-[20px]">
            <HStack className="mt-[38px] justify-end">
              <CloseIcon className="size-[24px] text-white" />
            </HStack>
            <VStack className="mt-[20px] shrink-0 items-center justify-center ">
              {charmDetailsData?.imageURL && (
                <SHImage
                  src={charmDetailsData.imageURL}
                  fallbackElement={<div>수호 이미지</div>}
                  className="h-[400px] w-[270px] rounded-[30px] bg-red-200 object-contain"
                />
              )}
            </VStack>
            <CTAContainer className="px-0">
              <NavFooter
                ratio="1:1"
                left={{ children: "공유하기", onClick: treeURLCopyToClipboard }}
                right={{ children: "다운로드" }}
              />
            </CTAContainer>
          </VStack>
        )}
      </Backdrop>
    </>
  );
}
