import NavFooter from "@/components/NavFooter";
import SHInputField from "@/components/base/SHInputField";
import SHLabel from "@/components/base/SHLabel";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

// type LuckyAddCategorySheetProps = {};

export default function LuckyAddCategorySheet() {
  return (
    <Drawer direction="bottom">
      <DrawerTrigger>
        <Button
          className="my-[8px] mr-[6px] rounded-[20px] bg-[#0B082B] px-[15px] py-[3px] hover:bg-[#0B082B]/50 focus:bg-main-purple-suho"
          onClick={() => {}}
        >
          직접 입력하기+
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto flex h-full w-full items-center justify-center rounded-none border-none md:w-[430px]">
        <main className="h-full w-full bg-[url('/imgs/home_bg.svg')] bg-cover bg-no-repeat">
          <VStack className="h-full w-full bg-[url('/imgs/home_bg_universe.svg')] bg-cover bg-no-repeat">
            <VStack className="mx-[20px]">
              {/* Header */}
              <HStack className="mt-[40px] h-[60px] items-end justify-between ">
                <VStack>
                  <SHLabel className="whitespace-pre-line text-[24px] font-[800] text-white">
                    {`그 날 행운이\n필요한 이유는 뭔가요?`}
                  </SHLabel>
                </VStack>
              </HStack>
            </VStack>
            {/* Tree BG */}
            <VStack wFull hFull className="mt-[10px]">
              {/* Tree BG_Top */}
              <HStack className="z-20 mx-[20px] mb-[-26px] flex-wrap justify-start pt-[40px]">
                <SHInputField label="직접 입력해주세요" type="text" fontColor="white" />
              </HStack>
              {/* Tree BG_BOTTOM */}
              <VStack className="h-full w-full bg-[url('/imgs/home_tree_bottom.svg')] bg-cover bg-no-repeat">
                <VStack className="mx-[20px] mt-[80px]">
                  <NavFooter
                    ratio="1:3"
                    left={{
                      title: "이전",
                      onClick: () => {},
                    }}
                    right={{
                      title: "다음",
                    }}
                  />
                </VStack>
              </VStack>
            </VStack>
          </VStack>
        </main>
      </DrawerContent>
    </Drawer>
  );
}
