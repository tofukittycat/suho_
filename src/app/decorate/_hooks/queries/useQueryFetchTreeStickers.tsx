import { getStickers } from "@/services/decorate/getStickers";
import { QueryKeys } from "@/services/queryKeys";
import { useQuery } from "@tanstack/react-query";

export default function useQueryFetchTreeStickers({ treeId }: { treeId: number }) {
  const { data, isPending } = useQuery({
    queryKey: [QueryKeys.TreeStickers],
    queryFn: () => {
      return getStickers({ treeId });
    },
  });

  return {
    data,
    isPending,
  };
}

export type UseFetchTreeStickersType = ReturnType<typeof useQueryFetchTreeStickers>;
