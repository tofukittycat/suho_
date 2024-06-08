"use client";

import { useSearchParams } from "next/navigation";

import { Suspense, useEffect, useMemo } from "react";

import { SHGlobalSpinner } from "@/components/base/SHSpinner";
import useAppRepository from "@/components/hooks/useAppRepository";
import { isEmpty } from "lodash";

import TreeEmptyStatusView from "../../_components/TreeEmptyStatusView";
import TreeExistStatusView from "../../_components/TreeExistStatusView";
import TreeSharedStatusView from "../../_components/TreeSharedStatusView";
import useQueryFetchTreeInfo from "../../_hooks/queries/useQueryFetchTreeInfo";
import useHome from "../../_hooks/useHome";

const useCheckGuest = () => {
  const searchParmas = useSearchParams();

  const {
    userInfoStore: [userInfo, setUserInfo],
  } = useAppRepository();

  const fromShareReceivedParam = useMemo(() => {
    const treeId = searchParmas.get("shTI");
    const userId = searchParmas.get("shUI");

    return { treeId: treeId ? Number(treeId) : null, userId: userId ? Number(userId) : null };
  }, [searchParmas]);

  const isGuest = Boolean(fromShareReceivedParam.treeId) && Boolean(fromShareReceivedParam.userId);
  const receivedParam = fromShareReceivedParam;

  useEffect(() => {
    setUserInfo({ ...userInfo, isGuest });
  }, []);

  return {
    isGuest,
    receivedParam,
  };
};

export default function Home() {
  const { isGuest, receivedParam } = useCheckGuest();

  const useHomeState = useHome();

  const {
    userInfoStore: [userInfo],
  } = useAppRepository();

  const useFetchTreeInfo = useQueryFetchTreeInfo({ userId: isGuest ? null : userInfo.userId });
  const { data: treeInfoData, isPending: isTreeInfoPending } = useFetchTreeInfo;

  const treeId = useMemo(() => {
    return treeInfoData?.treeId;
  }, [treeInfoData]);

  return (
    <>
      {(() => {
        if (isGuest) {
          return (
            <TreeSharedStatusView
              useHomeStatus={useHomeState}
              treeId={receivedParam.treeId ?? 0}
              userId={receivedParam.userId ?? 0}
            />
          );
        } else {
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
        }
      })()}
    </>
  );
}
