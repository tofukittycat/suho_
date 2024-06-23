"use client";

import { useSearchParams } from "next/navigation";

import { useEffect, useMemo } from "react";

import useAppRepository from "@/components/hooks/useAppRepository";
import useAuth from "@/components/hooks/useAuth";

import TreeEmptyStatusView from "../../_components/TreeEmptyStatusView";
import TreeExistStatusView from "../../_components/TreeExistStatusView";
import TreeSharedStatusView from "../../_components/TreeSharedStatusView";
import useQueryFetchTreeInfo from "../../_hooks/queries/useQueryFetchTreeInfo";
import useHome from "../../_hooks/useHome";

const useCheckGuest = () => {
  const searchParmas = useSearchParams();
  const { clearToken } = useAuth();

  const {
    userInfoStore: [userInfo, setUserInfo],
  } = useAppRepository();

  const fromShareReceivedParam = useMemo(() => {
    const treeId = searchParmas.get("shTI");
    const userId = searchParmas.get("shUI");

    return { treeId: treeId ? Number(treeId) : null, userId: userId ? Number(userId) : null };
  }, [searchParmas]);

  const receivedParam = fromShareReceivedParam;

  useEffect(() => {
    setUserInfo({
      ...userInfo,
      userId: fromShareReceivedParam.userId,
      treeId: fromShareReceivedParam.treeId,
    });
  }, [fromShareReceivedParam]);

  return {
    receivedParam,
  };
};

export default function Home() {
  const { receivedParam } = useCheckGuest();

  const useHomeState = useHome();

  const {
    userInfoStore: [userInfo, setUserInfo],
  } = useAppRepository();

  const useFetchTreeInfo = useQueryFetchTreeInfo({
    userId: receivedParam.userId ? receivedParam.userId : userInfo.userId,
  });
  const { data: treeInfoData, isPending: isTreeInfoPending } = useFetchTreeInfo;

  const treeId = useMemo(() => {
    return treeInfoData?.treeId;
  }, [treeInfoData]);

  useEffect(() => {
    if (!treeInfoData) {
      return;
    }

    setUserInfo({ ...userInfo, ...treeInfoData });
  }, [treeInfoData]);

  return (
    <>
      {(() => {
        if (!treeInfoData?.treeId && !treeInfoData?.tag && !treeInfoData?.date) {
          return (
            <TreeEmptyStatusView useHomeStatus={useHomeState} useFetchTreeInfo={useFetchTreeInfo} />
          );
        } else {
          if (!treeInfoData.owner) {
            return (
              <TreeSharedStatusView
                useHomeStatus={useHomeState}
                treeId={receivedParam.treeId ?? 0}
                userId={receivedParam.userId ?? 0}
              />
            );
          } else if (treeId) {
            return (
              <TreeExistStatusView
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
