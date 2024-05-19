import HamburgerNav from "@/components/HamburgerNav";
import NavFooter from "@/components/NavFooter";
import SHLabel from "@/components/base/SHLabel";
import SHPagination from "@/components/base/SHPagination";
import TreeBGView from "@/components/base/bg/TreeBGView";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import useUserInfo from "@/components/hooks/useAppRepository";
import useAppRepository from "@/components/hooks/useAppRepository";
import { Button } from "@/components/ui/button";

import useQueryFetchTreeCharms from "../_hooks/queries/useQueryFetchTreeCharms";
import { UseHomeType } from "../_hooks/useHome";

type TreeExistStatusViewProps = {
  useHomeStatus: UseHomeType;
};

export default function TreeExistStatusView({ useHomeStatus }: TreeExistStatusViewProps) {
  const { handleGoToTodayHoroscope, treeURLCopyToClipboard } = useHomeStatus;

  const { data, isPending, updateCurrentPage } = useQueryFetchTreeCharms();

  const {
    userInfoStore: [userInfo],
  } = useAppRepository();

  return (
    <TreeBGView
      className="relative"
      treeLayout={
        <VStack className="h-full w-full justify-between ">
          <VStack className="mx-[20px]">
            {/* Header */}
            <HStack className="mt-[40px] h-[60px] items-end justify-between ">
              <VStack>
                <SHLabel className="text-[16px] font-[800] text-white">5월 8일 시험을 위한</SHLabel>
                <SHLabel className="text-[24px] font-[800] text-white">
                  <span className="text-[#B49FFF]">{userInfo.username}님</span>
                </SHLabel>
              </VStack>
              {/* Header_HamburgerNav */}
              <HamburgerNav />
            </HStack>
            <SHLabel className="mt-[12px] text-[16px] font-[500] text-white">
              0개의 행운 부적이 걸렸어요!
            </SHLabel>
          </VStack>

          {/* Tree BG_Top */}
          {/* 로그인 했을때 안했을때 홈화면 나눠져야함 */}
          <VStack className="mx-[40px] mb-[110px] justify-end gap-[5px]">
            <VStack>
              <HStack className="h-[60px] items-end justify-center gap-[40px]">
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
        </VStack>
      }
      hillLayout={
        <VStack className="z-50 h-full w-full ">
          <SHPagination className="mx-[100px] mt-[30px]" />
          <VStack className="mx-[20px] mt-[50px]">
            <NavFooter
              ratio="1:1"
              left={{
                children: "데일리 운세보기",
                onClick: handleGoToTodayHoroscope,
              }}
              right={{
                children: "행운나무 공유하기",
                onClick: treeURLCopyToClipboard,
              }}
            />
          </VStack>
        </VStack>
      }
    />
  );
}
