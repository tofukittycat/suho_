import HamburgerNav from "@/components/HamburgerNav";
import NavFooter from "@/components/NavFooter";
import SHLabel from "@/components/base/SHLabel";
import SHPagination from "@/components/base/SHPagination";
import { SHGlobalSpinner } from "@/components/base/SHSpinner";
import TreeBGView from "@/components/base/bg/TreeBGView";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import useAppRepository from "@/components/hooks/useAppRepository";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { isEmpty } from "lodash";

import useQueryFetchTreeCharms from "../_hooks/queries/useQueryFetchTreeCharms";
import { UseFetchTreeInfoType } from "../_hooks/queries/useQueryFetchTreeInfo";
import { UseHomeType } from "../_hooks/useHome";

type TreeExistStatusViewProps = {
  useHomeStatus: UseHomeType;
  useFetchTreeInfo: UseFetchTreeInfoType;
};

export default function TreeExistStatusView({
  useHomeStatus,
  useFetchTreeInfo,
}: TreeExistStatusViewProps) {
  const {
    userInfoStore: [userInfo],
  } = useAppRepository();

  const { handleGoToTodayHoroscope, treeURLCopyToClipboard } = useHomeStatus;
  const { data: treeInfoData } = useFetchTreeInfo;

  const { data: treeCharmsData, isPending: isTreeCharmsPending } = useQueryFetchTreeCharms();

  const charmList = treeCharmsData?.treeCharmResponseList ?? [];

  const foramttedDate = (value: string) => {
    const date = dayjs(value);
    return `${date.month() + 1}월 ${date.date()}일`;
  };

  return (
    <>
      {isTreeCharmsPending ? (
        <SHGlobalSpinner />
      ) : (
        <TreeBGView
          className="relative"
          treeLayout={
            <VStack className="h-full w-full justify-between ">
              <VStack className="mx-[20px]">
                {/* Header */}
                <HStack className="mt-[40px] h-[60px] items-end justify-between">
                  <VStack>
                    <SHLabel className="text-[16px] font-[800] text-white">{`${foramttedDate(treeInfoData?.date ?? "")} ${treeInfoData?.tag}을 위한`}</SHLabel>
                    <SHLabel className="text-[24px] font-[800] text-white">
                      <span className="text-[#B49FFF]">{userInfo.username}</span>님의 행운 나무
                    </SHLabel>
                  </VStack>
                  {/* Header_HamburgerNav */}
                  <HamburgerNav />
                </HStack>
                <SHLabel className="mt-[12px] text-[16px] font-[500] text-white">
                  {`${treeCharmsData?.totalSize ?? 0}개의 행운 부적이 걸렸어요!`}
                </SHLabel>
              </VStack>
              {/* Tree BG_Top */}
              <VStack className="mx-[40px] mb-[110px] justify-end gap-[5px]">
                <VStack>
                  <HStack className="h-[60px] items-end justify-center gap-[40px]">
                    {isEmpty(charmList[0]) ? (
                      <Button className=" invisible h-[90%] w-[15%] bg-gray-600" />
                    ) : (
                      <Button className=" h-[90%] w-[15%] bg-gray-600" />
                    )}
                    {isEmpty(charmList[1]) ? (
                      <Button className=" invisible h-[90%] w-[15%] bg-gray-600" />
                    ) : (
                      <Button className=" h-[90%] w-[15%] bg-gray-600" />
                    )}
                    {isEmpty(charmList[2]) ? (
                      <Button className=" invisible h-[90%] w-[15%] bg-gray-600" />
                    ) : (
                      <Button className=" h-[90%] w-[15%] bg-gray-600" />
                    )}
                  </HStack>
                  <HStack className="h-[60px] items-end justify-center gap-[25px]">
                    {isEmpty(charmList[3]) ? (
                      <Button className=" invisible h-[90%] w-[15%] bg-gray-600" />
                    ) : (
                      <Button className=" h-[90%] w-[15%] bg-gray-600" />
                    )}
                    {isEmpty(charmList[4]) ? (
                      <Button className=" invisible h-[90%] w-[15%] bg-gray-600" />
                    ) : (
                      <Button className=" h-[90%] w-[15%] bg-gray-600" />
                    )}
                    {isEmpty(charmList[5]) ? (
                      <Button className=" invisible h-[90%] w-[15%] bg-gray-600" />
                    ) : (
                      <Button className=" h-[90%] w-[15%] bg-gray-600" />
                    )}
                    {isEmpty(charmList[6]) ? (
                      <Button className=" invisible h-[90%] w-[15%] bg-gray-600" />
                    ) : (
                      <Button className=" h-[90%] w-[15%] bg-gray-600" />
                    )}
                  </HStack>
                  <HStack className="h-[60px] w-full items-end justify-between px-[10px]">
                    <HStack className="] h-full w-[110px] items-end justify-between gap-[6px]">
                      {isEmpty(charmList[7]) ? (
                        <Button className="invisible h-[90%] w-full flex-1 bg-gray-600" />
                      ) : (
                        <Button className=" h-[90%] w-full flex-1 bg-gray-600" />
                      )}
                      {isEmpty(charmList[8]) ? (
                        <Button className="invisible h-[90%] w-full flex-1 bg-gray-600" />
                      ) : (
                        <Button className=" h-[90%] w-full flex-1 bg-gray-600" />
                      )}
                    </HStack>
                    <HStack className="h-full w-[50px] items-end justify-end gap-[10px] ">
                      {isEmpty(charmList[9]) ? (
                        <Button className="invisible h-[90%] w-full flex-1 bg-gray-600" />
                      ) : (
                        <Button className=" h-[90%] w-full flex-1 bg-gray-600" />
                      )}
                    </HStack>
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
      )}
    </>
  );
}
