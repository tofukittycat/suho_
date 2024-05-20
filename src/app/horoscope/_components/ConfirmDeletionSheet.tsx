"use client";

import SHCard from "@/components/base/SHCard";
import SHImage from "@/components/base/SHImage";
import VStack from "@/components/base/stack/VStack";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

export default function ConfirmDeletionSheet() {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger className="h-full w-full rounded-[15px] bg-[#EB5847] text-[16px] font-[600] text-white hover:bg-[#da5445]">
        삭제하기
      </DrawerTrigger>
      <DrawerContent className="mx-auto flex h-full w-full items-center justify-center rounded-none border-none bg-transparent md:w-[430px]">
        <VStack wFull hFull className="justify-end border bg-black/20 px-[20px] pb-[20px]">
          <SHCard className="h-[290px]">
            <SHImage
              src=""
              className="mt-[24px] h-[400px] px-[40px]"
              fallbackElement={<div className="bg-gray-500"></div>}
            />
          </SHCard>
        </VStack>
      </DrawerContent>
    </Drawer>
  );
}
