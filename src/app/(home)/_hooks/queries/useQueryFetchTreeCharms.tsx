import { useCallback, useRef, useState } from "react";

import useUserInfo from "@/components/hooks/useAppRepository";
import useAppRepository from "@/components/hooks/useAppRepository";
import { getTreeCharms } from "@/services/home";
import { QueryKeys } from "@/services/queryKeys";
import { useQuery } from "@tanstack/react-query";

export default function useQueryFetchTreeCharms() {
  const {
    userInfoStore: [userInfo],
  } = useAppRepository();

  const [currentPage, setCurrentPage] = useState(1);
  const pagePerPage = useRef(10);

  const { data, isPending } = useQuery({
    queryKey: [QueryKeys.TreeCharms, { currentPage, pagePerPage }],
    queryFn: () => {
      if (!userInfo.userId) {
        return Promise.reject();
      }

      return getTreeCharms({
        userId: userInfo.userId,
        page: currentPage,
        size: pagePerPage.current,
      });
    },
  });

  const updateCurrentPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return {
    data,
    isPending,
    updateCurrentPage,
  };
}
