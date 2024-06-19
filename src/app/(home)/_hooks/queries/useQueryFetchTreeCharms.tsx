import { useCallback, useRef, useState } from "react";

import { getTreeCharms } from "@/services/home";
import { QueryKeys } from "@/services/queryKeys";
import { useQuery } from "@tanstack/react-query";

type UseQueryFetchTreeCharmsProps = {
  userId?: number;
};

export default function useQueryFetchTreeCharms({ userId }: UseQueryFetchTreeCharmsProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const pagePerPage = useRef(10);

  const { data, isPending, isError } = useQuery({
    queryKey: [QueryKeys.TreeCharms, { currentPage, pagePerPage }],
    queryFn: () => {
      if (!userId) {
        return Promise.reject();
      }

      return getTreeCharms({
        userId,
        page: currentPage,
        size: pagePerPage.current,
      });
    },
    enabled: Boolean(userId),
    staleTime: 0,
  });

  const updateCurrentPage = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  return {
    data,
    isPending,
    isError,
    currentPage,
    updateCurrentPage,
  };
}
