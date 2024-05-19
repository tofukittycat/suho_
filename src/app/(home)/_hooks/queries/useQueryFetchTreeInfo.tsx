import useAppRepository from "@/components/hooks/useAppRepository";
import { getTreeInfo } from "@/services/home";
import { QueryKeys } from "@/services/queryKeys";
import { useQuery } from "@tanstack/react-query";

export default function useQueryFetchTreeInfo() {
  const {
    userInfoStore: [userInfo],
  } = useAppRepository();

  const { data, isPending } = useQuery({
    queryKey: [QueryKeys.TreeInfo],
    queryFn: () => {
      if (!userInfo.userId) {
        return Promise.reject();
      }

      return getTreeInfo({ userId: userInfo.userId });
    },
  });

  return {
    data,
    isPending,
  };
}
