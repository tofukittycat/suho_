import { useRouter, useSearchParams } from "next/navigation";

import { useMemo } from "react";

import CTAContainer from "@/components/CTAContainer";
import HamburgerNav from "@/components/HamburgerNav";
import NavFooter from "@/components/NavFooter";
import SHLabel from "@/components/base/SHLabel";
import { SHGlobalSpinner } from "@/components/base/SHSpinner";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import useAppRepository from "@/components/hooks/useAppRepository";
import { Pagination } from "@mui/material";
import dayjs from "dayjs";

import useQueryFetchTreeCharms from "../_hooks/queries/useQueryFetchTreeCharms";
import useQueryFetchTreeInfo, {
  UseFetchTreeInfoType,
} from "../_hooks/queries/useQueryFetchTreeInfo";
import { UseHomeType } from "../_hooks/useHome";
import CharmDownloadAndShareSheet from "./CharmDownloadAndShareSheet";
import LuckyBox from "./LuckyBox";

type TreeSharedStatusViewProps = {
  useHomeStatus: UseHomeType;
  treeId: number;
  userId: number;
};

export default function TreeSharedStatusView({
  useHomeStatus,
  treeId,
  userId,
}: TreeSharedStatusViewProps) {
  const { push } = useRouter();

  const useFetchTreeInfo = useQueryFetchTreeInfo({ userId: userId });
  const { data: treeInfoData, isPending: isTreeInfoPending } = useFetchTreeInfo;

  const { handleGoToLuckyTreeCreate, handleGoToWriteCharm } = useHomeStatus;

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

  const formattedDate = (value: string) => {
    const date = dayjs(value);
    return `${date.month() + 1}월 ${date.date()}일`;
  };

  const handleChangePagination = (event: React.ChangeEvent<unknown>, value: number) => {
    updateCurrentPage(value);
  };

  const handleClickLuckyBox = () => {
    const treeId = treeInfoData?.treeId;

    if (treeId) {
      push(`/luckytree/result/${treeId}/from-LuckyBox`);
    }
  };

  return (
    <>
      {isTreeCharmsPending ? (
        <SHGlobalSpinner />
      ) : (
        <VStack className="h-full justify-between">
          {/* Header */}
          <VStack className="mx-[20px] mt-[60px]">
            <HStack className="h-[60px] items-end justify-between">
              <VStack>
                <SHLabel className="text-[16px] font-[800] text-white">{`${formattedDate(treeInfoData?.date ?? "")} ${treeInfoData?.tag}을 위한`}</SHLabel>
                <SHLabel className="text-[24px] font-[800] text-white">
                  <span className="text-[#B49FFF]">{treeInfoData?.username}</span>님의 행운 나무
                </SHLabel>
              </VStack>

              <HamburgerNav />
            </HStack>
            <SHLabel className="mt-[12px] text-[16px] font-[500] text-white">
              {`${treeCharmsData?.totalSize ?? 0}개의 행운 부적이 걸렸어요!`}
            </SHLabel>
          </VStack>

          {/* 나무 Tree */}
          <VStack className="h-[52%] w-full items-center justify-end">
            <VStack>
              <VStack
                className={
                  "relative h-[280px] w-[310px] items-center bg-[url('/imgs/home_tree_top.svg')] bg-contain bg-bottom bg-no-repeat pt-[15px] sm:h-[370px] sm:w-[350px] sm:pt-[70px]"
                }
              >
                <VStack className="b w-full gap-[5px]">
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
                  <HStack className="h-[60px] w-full items-end justify-between px-[5px]">
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
                {/* LuckyBox */}
                {treeInfoData?.date && (
                  <VStack className="absolute bottom-[-36px] right-[40px] items-end">
                    <LuckyBox
                      date={formattedDate(treeInfoData.date)}
                      onClick={handleClickLuckyBox}
                    />
                  </VStack>
                )}
              </VStack>
            </VStack>
            {/* Pagination */}
            <VStack
              sx={{
                justifyContent: "center",
                alignItems: "center",
                pt: "40px",
                px: "20px",
              }}
            >
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
          </VStack>
          {/* CTA */}
          <CTAContainer className="h-fit">
            <NavFooter
              ratio="1:1"
              left={{
                children: "내 행운나무 만들기",
                onClick: handleGoToLuckyTreeCreate,
              }}
              right={{
                children: "행운부적 써주기",
                onClick: () => {
                  handleGoToWriteCharm(treeId);
                },
              }}
            />
          </CTAContainer>
        </VStack>
      )}
    </>
  );
}
