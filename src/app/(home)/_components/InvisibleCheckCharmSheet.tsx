import { useEffect } from "react";
import { IoClose as CloseIcon } from "react-icons/io5";

import BottomSheet from "@/components/BottomSheet";
import SHImage from "@/components/base/SHImage";
import SHLabel from "@/components/base/SHLabel";
import HStack from "@/components/base/stack/HStack";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";
import useToggle from "@/components/hooks/useToggle";

export default function InvisibleCheckCharmSheet({ closeDrawer }: { closeDrawer: () => void }) {
  const { isOpen, open, close } = useToggle();

  useEffect(() => {
    open();
  }, []);

  return (
    <BottomSheet
      isOpen={isOpen}
      onClose={() => {
        close();
        closeDrawer();
      }}
    >
      <VStack className="pb-[32px]">
        <HStack className="mr-[16px] mt-[16px] justify-end">
          {/* <DrawerClose> */}
          <CloseIcon
            className="size-[24px] text-[#ADABC6]"
            onClick={() => {
              close();
              closeDrawer();
            }}
          />
          {/* </DrawerClose> */}
        </HStack>
        <VCStack>
          <SHImage src="/imgs/icons/ic_treasure.svg" className="h-[100px] w-[100px]" />
          <SHLabel className="mt-[16px] whitespace-pre-wrap text-center font-[600] leading-4 text-[#0B082B]">
            {`행운 부적은 행운이 필요한 날의\n`}
            <span className="text-[#7B57FC]">3일 전부터</span>
            {` 열람할 수 있어요!`}
          </SHLabel>
        </VCStack>
      </VStack>
    </BottomSheet>
  );
}
