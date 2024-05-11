"use client";

import HamburgerNav from "@/components/HamburgerNav";
import NavFooter from "@/components/NavFooter";
import SHLabel from "@/components/base/SHLabel";
import SHPagination from "@/components/base/SHPagination";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="h-full w-full bg-[url('/imgs/home_bg.svg')] bg-cover bg-no-repeat">
      <VStack className="h-full w-full bg-[url('/imgs/home_bg_universe.svg')] bg-cover bg-no-repeat">
        <VStack className="mx-[20px]">
          {/* Header */}
          <HStack className="mt-[40px] h-[60px] items-end justify-between ">
            <VStack>
              <SHLabel className="text-[16px] font-[800] text-white">5월 8일 시험을 위한</SHLabel>
              <SHLabel className="text-[24px] font-[800] text-white">
                <span className="text-main-purple-suho">승진</span>님의 행운 나무
              </SHLabel>
            </VStack>
            {/* Header_HamburgerNav */}
            <HamburgerNav />
          </HStack>
          <SHLabel className="mt-[12px] text-[16px] font-[500] text-white">
            0개의 행운 부적이 걸렸어요!
          </SHLabel>
        </VStack>
        {/* Tree BG */}
        <VStack wFull hFull className="mt-[10px]">
          {/* Tree BG_Top */}
          <VStack className="mx-[40px] mb-[-26px] h-[500px] gap-[5px] bg-[url('/imgs/home_tree_top.svg')] bg-contain bg-bottom bg-no-repeat pt-[40px]">
            <VStack>
              <HStack className="mt-[-5px] h-[60px] items-end justify-center gap-[40px]">
                <Button className=" h-[90%] w-[15%] bg-gray-600" />
                <Button className=" h-[90%] w-[15%] bg-gray-600" />
                <Button className=" h-[90%] w-[15%] bg-gray-600" />
              </HStack>
              <HStack className="h-[60px] items-end justify-center gap-[25px]">
                <Button className=" h-[90%] w-[15%] bg-gray-600" />
                <Button className=" h-[90%] w-[15%] bg-gray-600" />
                <Button className=" h-[90%] w-[15%] bg-gray-600" />
                <Button className=" h-[90%] w-[15%] bg-gray-600" />
              </HStack>
              <HStack className="h-[60px] items-end justify-between px-[10px]">
                <HStack className="h-full w-[35%] items-end justify-center gap-[10px]">
                  <Button className="h-[90%] w-full  bg-gray-600" />
                  <Button className="h-[90%] w-full bg-gray-600" />
                </HStack>
                <Button className="h-[90%] w-[15%] bg-gray-600" />
              </HStack>
            </VStack>
          </VStack>
          {/* Tree BG_BOTTOM */}
          <VStack className="h-full w-full bg-[url('/imgs/home_tree_bottom.svg')] bg-cover bg-no-repeat">
            <SHPagination className="mx-[100px] mt-[30px]" />
            <VStack className="mx-[20px] mt-[50px]">
              <NavFooter
                ratio="1:1"
                left={{
                  title: "데일리 운세보기",
                }}
                right={{
                  title: "행운나무 공유하기",
                }}
              />
            </VStack>
          </VStack>
        </VStack>
      </VStack>
    </main>
  );
}
