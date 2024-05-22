import CTABottomPadding from "@/components/CTABottomPadding";
import HamburgerNav from "@/components/HamburgerNav";
import NavFooter from "@/components/NavFooter";
import SHLabel from "@/components/base/SHLabel";
import { SHSpinner } from "@/components/base/SHSpinner";
import TreeBGView from "@/components/base/bg/TreeBGView";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import useAppRepository from "@/components/hooks/useAppRepository";

import { UseFetchTreeInfoType } from "../_hooks/queries/useQueryFetchTreeInfo";
import { UseHomeType } from "../_hooks/useHome";

type TreeEmptyStatusViewProps = {
  useHomeStatus: UseHomeType;
  useFetchTreeInfo: UseFetchTreeInfoType;
};

export default function TreeEmptyStatusView({
  useHomeStatus,
  useFetchTreeInfo,
}: TreeEmptyStatusViewProps) {
  const { handleGoToTodayHoroscope, handleGoToLuckyTree } = useHomeStatus;

  useFetchTreeInfo;

  const {
    userInfoStore: [userInfo],
  } = useAppRepository();

  return (
    <TreeBGView
      className="relative"
      hiddenTree
      treeLayout={
        <VStack className="h-full w-full justify-between ">
          <VStack className="mx-[20px]">
            {/* Header */}
            <HStack className="mt-[40px] items-end justify-between">
              <VStack>
                {userInfo?.username && (
                  <SHLabel className="text-[24px] font-[800] text-white">
                    <span className="text-[#B49FFF]">{userInfo.username}님</span>
                  </SHLabel>
                )}
                <SHLabel className="text-[24px] font-[800] text-white">
                  행운 나무를 만들어보세요
                </SHLabel>
              </VStack>
              {/* Header_HamburgerNav */}
              <div>
                <HamburgerNav />
              </div>
            </HStack>
          </VStack>
          <VStack className="mb-[80px]">
            <SHSpinner />
          </VStack>
        </VStack>
      }
      hillLayout={
        <CTABottomPadding className="mb-[20px]">
          <NavFooter
            ratio="1:1"
            left={{
              children: "데일리 운세보기",
              onClick: handleGoToTodayHoroscope,
            }}
            right={{
              children: "행운나무 만들기",
              onClick: handleGoToLuckyTree,
            }}
          />
        </CTABottomPadding>
      }
    />
  );
}
