"use client";

import { useRouter } from "next/navigation";

import { IoClose as CloseIcon } from "react-icons/io5";

import CTAContainer from "@/components/CTAContainer";
import NavFooter from "@/components/NavFooter";
import SHImage from "@/components/base/SHImage";
import { SHGlobalSpinner } from "@/components/base/SHSpinner";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import useAppRepository from "@/components/hooks/useAppRepository";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import lStorage, { StorageKeys } from "@/utils/storage";
import { fileNameByURL } from "@/utils/utils";

import useQueryFetchTodayHoroscopeCharmInfo from "../_hooks/queries/useQueryFetchTodayHoroscopeCharmInfo";

export default function CharmCustomizeSheet({ onlyDownload }: { onlyDownload: boolean }) {
  const { push } = useRouter();
  const { data, isPending } = useQueryFetchTodayHoroscopeCharmInfo();

  const {
    userInfoStore: [userInfo],
    decorateInfoStore: [decorateInfo, setDecorateInfo],
  } = useAppRepository();

  const handleGoToDecorate = () => {
    push("/home");

    setTimeout(() => {
      // if (userInfo.treeId) {
      //   push(`/decorate/${userInfo.treeId}`);
      //   setDecorateInfo(prev => ({ ...prev, onlyDownload: false, imageURL: data?.imageURL ?? "" }));
      // } else {
      //   push(`/decorate/download`);
      //   setDecorateInfo(prev => ({ ...prev, onlyDownload: true, imageURL: data?.imageURL ?? "" }));
      // }
      if (onlyDownload) {
        push(`/decorate/download`);
        setDecorateInfo(prev => ({ ...prev, onlyDownload: true, imageURL: data?.imageURL ?? "" }));
      } else {
        push(`/decorate/${userInfo.treeId}`);
        setDecorateInfo(prev => ({ ...prev, onlyDownload: false, imageURL: data?.imageURL ?? "" }));
      }
    }, 100);
  };

  const handleDownload = () => {
    const imageURL = data?.imageURL;

    if (imageURL) {
      fileDownload(imageURL, fileNameByURL(imageURL));
    }
  };

  return (
    <Drawer direction="bottom">
      <DrawerTrigger>
        <Button className="h-[54px] w-full rounded-[15px] bg-main-purple-suho text-[16px] font-[600] text-white hover:bg-[#7553f0]">
          행운 부적 받기
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto flex h-full w-full items-center justify-center rounded-none border-none bg-transparent  md:w-[430px]">
        {isPending ? (
          <SHGlobalSpinner />
        ) : (
          <VStack wFull hFull className=" bg-black/50 px-[20px] ">
            <HStack className="mt-[48px] justify-end">
              <DrawerClose>
                <CloseIcon className="size-[24px] text-white" />
              </DrawerClose>
            </HStack>
            <VStack className="mt-[24px] h-full sm:justify-center">
              <SHImage
                src={data?.imageURL ?? ""}
                className="mx-auto h-[400px] w-[270px] rounded-[30px] object-contain"
              />
            </VStack>
            <CTAContainer className="px-0">
              <NavFooter
                ratio="1:1"
                left={{ children: "다운로드 하기", onClick: handleDownload }}
                right={{ children: "행운부적 꾸미기", onClick: handleGoToDecorate }}
              />
            </CTAContainer>
          </VStack>
        )}
      </DrawerContent>
    </Drawer>
  );
}

/**
 * file download
 * @param url https://image-staging.datapuree.io/notice/80/result_data_1.json
 * @param fileName 파일명
 * @returns 파일 다운로드 가능
 */
export async function fileDownload(url: string, fileName?: string) {
  return await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "image/jpeg",
      "Authorization": `Bearer ${lStorage.get(StorageKeys.Token)}`,
    },
  })
    .then(res => res.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = fileName ?? "file";
      document.body.appendChild(a);
      a.click();

      setTimeout(() => {
        window.URL.revokeObjectURL(url);
      }, 60000);
      a.remove();
    });
}
