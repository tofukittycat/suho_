"use client";

import { useSearchParams } from "next/navigation";

import { useMemo } from "react";

import { SHGlobalSpinner } from "@/components/base/SHSpinner";
import useAppRepository from "@/components/hooks/useAppRepository";
import { isEmpty } from "lodash";

import TreeEmptyStatusView from "../../_components/TreeEmptyStatusView";
import TreeExistStatusView from "../../_components/TreeExistStatusView";
import TreeSharedStatusView from "../../_components/TreeSharedStatusView";
import useQueryFetchTreeInfo from "../../_hooks/queries/useQueryFetchTreeInfo";
import useHome from "../../_hooks/useHome";

export default function Home() {
  const searchParmas = useSearchParams();
  const useHomeState = useHome();

  const {
    userInfoStore: [userInfo],
  } = useAppRepository();

  const useFetchTreeInfo = useQueryFetchTreeInfo({ userId: userInfo.userId });
  const { data: treeInfoData, isPending: isTreeInfoPending } = useFetchTreeInfo;

  const treeId = useMemo(() => {
    return treeInfoData?.treeId;
  }, [treeInfoData]);

  const fromSharedWithTreeIdAndUserId = useMemo(() => {
    const treeId = searchParmas.get("shTI");
    const userId = searchParmas.get("shUI");

    return { treeId: treeId ? Number(treeId) : null, userId: userId ? Number(userId) : null };
  }, [searchParmas]);

  return (
    <>
      {fromSharedWithTreeIdAndUserId.treeId && fromSharedWithTreeIdAndUserId.userId ? (
        <TreeSharedStatusView
          useHomeStatus={useHomeState}
          treeId={fromSharedWithTreeIdAndUserId.treeId}
          userId={fromSharedWithTreeIdAndUserId.userId}
        />
      ) : isTreeInfoPending ? (
        <SHGlobalSpinner />
      ) : (
        <>
          {(() => {
            if (treeId) {
              return (
                <TreeExistStatusView
                  useHomeStatus={useHomeState}
                  useFetchTreeInfo={useFetchTreeInfo}
                />
              );
            } else {
              return (
                <TreeEmptyStatusView
                  useHomeStatus={useHomeState}
                  useFetchTreeInfo={useFetchTreeInfo}
                />
              );
            }
          })()}
        </>
      )}
    </>
  );
}
