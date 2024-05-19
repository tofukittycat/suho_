import { useState } from "react";

import { getTreeFortune } from "@/services/luckytree";
import { QueryKeys } from "@/services/queryKeys";
import { useQuery } from "@tanstack/react-query";

export default function useQueryFetchTreeFortune() {
  const [id, setId] = useState<number>(0);

  const { data, isPending, refetch } = useQuery({
    queryKey: [QueryKeys.TreeFortune],
    queryFn: () => getTreeFortune({ treeId: id }),
    enabled: false,
  });

  const fetchTreeFortune = (treeId: number) => {
    setId(treeId);

    setTimeout(() => {
      refetch();
    }, 300);
  };

  return {
    data,
    isPending,
    fetchTreeFortune,
  };
}
