import { ChangeEvent, useEffect } from "react";

import CTABottomPadding from "@/components/CTABottomPadding";
import NavFooter from "@/components/NavFooter";
import SHInputField from "@/components/base/SHInputField";
import SHLabel from "@/components/base/SHLabel";
import TreeBGView from "@/components/base/bg/TreeBGView";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { isEmpty } from "lodash";

import { UseLuckyTreeType } from "../_hooks/useLuckyTree";

type LuckyAddCategorySheetProps = {
  useluckyTree: UseLuckyTreeType;
};

export default function LuckyAddCategorySheet({ useluckyTree }: LuckyAddCategorySheetProps) {
  const { infoData, updateFields, handleCreateLuckyTree } = useluckyTree;

  const onChangeCategory = (event: ChangeEvent<HTMLInputElement>) => {
    updateFields({ tag: event.target.value });
  };

  useEffect(() => {
    updateFields({ tag: null });
  }, []);

  return (
    <Drawer direction="bottom">
      <DrawerTrigger>
        <Button className="my-[8px] mr-[6px] rounded-[20px] bg-[#0B082B] text-[18px] font-[500] hover:bg-[#0B082B]/50 focus:bg-main-purple-suho">
          직접 입력하기+
        </Button>
      </DrawerTrigger>
      <DrawerContent className="mx-auto flex h-full w-full items-center justify-center rounded-none border-none md:w-[430px]">
        <TreeBGView
          className="relative bg-[url('/imgs/home_bg.svg')] bg-cover"
          hiddenTree
          treeLayout={
            <VStack className="z-30 h-full w-full justify-between">
              <VStack className="mx-[20px]">
                {/* Header */}
                <HStack className="mt-[40px] items-end justify-between">
                  <VStack>
                    <SHLabel className="whitespace-pre-line text-[24px] font-[800] text-white">
                      {`그 날 행운이\n필요한 이유는 뭔가요?`}
                    </SHLabel>
                  </VStack>
                </HStack>
                <HStack className="z-20 mt-[100px] flex-wrap justify-start">
                  <SHInputField
                    label="직접 입력해주세요"
                    type="text"
                    fontColor="white"
                    value={infoData.tag}
                    onChange={onChangeCategory}
                  />
                </HStack>
              </VStack>
            </VStack>
          }
          hillLayout={
            <CTABottomPadding className="mb-[60px]">
              <NavFooter
                ratio="1:3"
                left={{ children: <DrawerClose>이전</DrawerClose> }}
                right={{
                  children: "다음",
                  disabled: isEmpty(infoData.tag),
                  onClick: handleCreateLuckyTree,
                }}
              />
            </CTABottomPadding>
          }
        />
      </DrawerContent>
    </Drawer>
  );
}
