import { IoClose as CloseIcon } from "react-icons/io5";

import NavFooter from "@/components/NavFooter";
import SHImage from "@/components/base/SHImage";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

// type CharmShareCustomizeDrawerProps = {};

export default function CharmShareCustomizeDrawer() {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger>
        <Button className="h-[54px] w-full rounded-[15px] bg-main-purple-suho text-[16px] font-[600] text-white hover:bg-[#7553f0]">
          행운 부적 받기
        </Button>
      </DrawerTrigger>
      <DrawerContent className="left-0 right-0 h-full w-full rounded-none border-none bg-transparent md:left-auto md:right-[365px] md:w-[430px]">
        <VStack wFull hFull className="bordr bg-black/50 px-[20px]">
          <HStack className="mt-[48px] justify-end">
            <CloseIcon className="size-[24px] text-white" />
          </HStack>
          <SHImage
            src=""
            className="mt-[24px] h-[400px] px-[40px]"
            fallbackElement={<div className="bg-gray-500"></div>}
          />
          <VStack className="mt-[50px]">
            <NavFooter ratio="1:1" left={{ title: "공유하기" }} right={{ title: "꾸미러가기" }} />
          </VStack>
        </VStack>
      </DrawerContent>
    </Drawer>
  );
}
