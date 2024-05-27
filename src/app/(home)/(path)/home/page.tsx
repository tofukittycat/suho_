"use client";

import { useEffect, useMemo } from "react";

import { SHGlobalSpinner } from "@/components/base/SHSpinner";

import TreeEmptyStatusView from "../../_components/TreeEmptyStatusView";
import TreeExistStatusView from "../../_components/TreeExistStatusView";
import useQueryFetchTreeInfo from "../../_hooks/queries/useQueryFetchTreeInfo";
import useQueryFetchUserCheckInfo from "../../_hooks/queries/useQueryFetchUserCheckInfo";
import useHome from "../../_hooks/useHome";

export default function Home() {
  const useHomeState = useHome();
  const { router } = useHomeState;

  const { data: userCheckInfoData, isPending: isUserCheckInfoPending } =
    useQueryFetchUserCheckInfo();

  const useFetchTreeInfo = useQueryFetchTreeInfo();
  const { data: treeInfoData, isPending: isTreeInfoPending } = useFetchTreeInfo;

  const treeId = useMemo(() => {
    return treeInfoData?.treeId;
  }, [treeInfoData]);

  useEffect(() => {
    if (!userCheckInfoData) {
      return;
    }

    if (userCheckInfoData.hasInfo === false) {
      router.push("/signin/info");
    }
  }, [userCheckInfoData]);

  if (typeof window !== "object") {
    return <></>;
  }

  return (
    <>
      {isUserCheckInfoPending || isTreeInfoPending ? (
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
