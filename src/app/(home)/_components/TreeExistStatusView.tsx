import { useEffect, useMemo } from "react";

import BottomSheet from "@/components/BottomSheet";
import HamburgerNav from "@/components/HamburgerNav";
import NavFooter from "@/components/NavFooter";
import SHLabel from "@/components/base/SHLabel";
import { SHGlobalSpinner } from "@/components/base/SHSpinner";
import TreeBGView from "@/components/base/bg/TreeBGView";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import useAppRepository from "@/components/hooks/useAppRepository";
import { Pagination } from "@mui/material";
import dayjs from "dayjs";

import useQueryFetchTreeCharms from "../_hooks/queries/useQueryFetchTreeCharms";
import { UseFetchTreeInfoType } from "../_hooks/queries/useQueryFetchTreeInfo";
import { UseHomeType } from "../_hooks/useHome";
import CharmDownloadAndShareSheet from "./CharmDownloadAndShareSheet";

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

  const {
    data: treeCharmsData,
    isPending: isTreeCharmsPending,
    currentPage,
    updateCurrentPage,
  } = useQueryFetchTreeCharms();

  const charmList = treeCharmsData?.treeCharmResponseList ?? [];

  const totalSize = useMemo(() => {
    if (treeCharmsData?.totalSize) {
      return Math.ceil(treeCharmsData?.totalSize / 10);
    }

    return 1;
  }, [treeCharmsData]);

  const foramttedDate = (value: string) => {
    const date = dayjs(value);
    return `${date.month() + 1}월 ${date.date()}일`;
  };

  const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    updateCurrentPage(value);
  };

  return (
    <>
      {isTreeCharmsPending ? (
        <SHGlobalSpinner />
      ) : (
        <TreeBGView
          className="relative"
          treeLayout={
            <VStack className="h-full w-full justify-between">
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
              <VStack className="mx-[40px] mb-[90px] justify-end gap-[5px]">
                <VStack className="gap-[5px]">
                  <HStack className="h-[60px] items-end justify-center gap-[30px]">
                    {charmList[0] && treeInfoData && (
                      <CharmDownloadAndShareSheet
                        charmData={charmList[0]}
                        visibleCharm={treeInfoData.visibleCharm}
                      />
                    )}
                    {charmList[1] && treeInfoData && (
                      <CharmDownloadAndShareSheet
                        charmData={charmList[1]}
                        visibleCharm={treeInfoData.visibleCharm}
                      />
                    )}
                    {charmList[2] && treeInfoData && (
                      <CharmDownloadAndShareSheet
                        charmData={charmList[2]}
                        visibleCharm={treeInfoData.visibleCharm}
                      />
                    )}
                  </HStack>
                  <HStack className="h-[60px] items-end justify-center gap-[25px]">
                    {charmList[3] && treeInfoData && (
                      <CharmDownloadAndShareSheet
                        charmData={charmList[3]}
                        visibleCharm={treeInfoData.visibleCharm}
                      />
                    )}
                    {charmList[4] && treeInfoData && (
                      <CharmDownloadAndShareSheet
                        charmData={charmList[4]}
                        visibleCharm={treeInfoData.visibleCharm}
                      />
                    )}
                    {charmList[5] && treeInfoData && (
                      <CharmDownloadAndShareSheet
                        charmData={charmList[5]}
                        visibleCharm={treeInfoData.visibleCharm}
                      />
                    )}
                    {charmList[6] && treeInfoData && (
                      <CharmDownloadAndShareSheet
                        charmData={charmList[6]}
                        visibleCharm={treeInfoData.visibleCharm}
                      />
                    )}
                  </HStack>
                  <HStack className="mt-[5px] h-[60px] w-full items-end justify-between px-[5px]">
                    <HStack className="h-full w-[110px] items-end justify-between gap-[6px]">
                      {charmList[7] && treeInfoData && (
                        <CharmDownloadAndShareSheet
                          charmData={charmList[7]}
                          visibleCharm={treeInfoData.visibleCharm}
                        />
                      )}
                      {charmList[8] && treeInfoData && (
                        <CharmDownloadAndShareSheet
                          charmData={charmList[8]}
                          visibleCharm={treeInfoData.visibleCharm}
                        />
                      )}
                    </HStack>
                    <HStack className="h-full w-[50px] items-end justify-end gap-[10px] ">
                      {charmList[9] && treeInfoData && (
                        <CharmDownloadAndShareSheet
                          charmData={charmList[9]}
                          visibleCharm={treeInfoData.visibleCharm}
                        />
                      )}
                    </HStack>
                  </HStack>
                </VStack>
              </VStack>
            </VStack>
          }
          hillLayout={
            <VStack className="z-50 h-full w-full">
              <VStack sx={{ justifyContent: "center", alignItems: "center", mt: "30px" }}>
                <Pagination
                  count={totalSize}
                  page={currentPage}
                  shape="rounded"
                  color="secondary"
                  onChange={handleChangePagination}
                  sx={{
                    "bgcolor": "rgba(123, 87, 252, 0.2)",
                    "borderRadius": "18px",
                    "& .MuiPaginationItem-root": {
                      color: "#fff",
                    },
                    "& li .Mui-selected": {
                      color: "white",
                      backgroundColor: "rgba(123, 87, 252, 0.8)",
                    },
                  }}
                />
              </VStack>
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

// Components

// const Charm = ({
//   charmData,
//   onClick,
// }: {
//   charmData: TreeCharmItem;
//   onClick: ({ charmId, imageUrl }: { charmId: number; imageUrl: string }) => void;
// }) => {
//   const { charmId, sender, imageUrl, thumbnailUrl } = charmData;

//   const handleClickCharm = () => {
//     onClick({ charmId, imageUrl: imageUrl ?? "" });
//   };

//   return (
//     <VStack
//       component={Button}
//       className="h-[60px] w-[60px] items-center justify-between bg-gray-600/15 p-0"
//       onClick={handleClickCharm}
//     >
//       <SHImage src={thumbnailUrl ?? ""} className="h-[40px] w-[40px]" />
//       <SHLabel className="h-full w-[65px] truncate text-center text-[12px] font-[500] text-white">
//         {sender}
//       </SHLabel>
//     </VStack>
//   );
// };
