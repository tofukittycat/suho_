import { useEffect } from "react";

import useAppRepository from "@/components/hooks/useAppRepository";
import { getTreeInfo } from "@/services/home";
import { QueryKeys } from "@/services/queryKeys";
import { useQuery } from "@tanstack/react-query";

export default function useQueryFetchTreeInfo({ userId }: { userId?: number | null | undefined }) {
  const {
    userInfoStore: [userInfo, setUserInfo],
  } = useAppRepository();

  const { data, isPending } = useQuery({
    queryKey: [QueryKeys.TreeInfo],
    queryFn: () => {
      if (!userId) {
        return Promise.reject();
      }

      return getTreeInfo({ userId });
    },
    staleTime: 0,
    enabled: Boolean(userId),
  });

  useEffect(() => {
    if (!data) {
      return;
    }

    setUserInfo({ ...userInfo, treeId: data.treeId });
  }, [data]);

  return {
    data,
    isPending,
  };
}

export type UseFetchTreeInfoType = ReturnType<typeof useQueryFetchTreeInfo>;
