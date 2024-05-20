import { useEffect } from "react";

import useAppRepository from "@/components/hooks/useAppRepository";
import { QueryKeys } from "@/services/queryKeys";
import { getUserCheckInfo } from "@/services/user";
import { useQuery } from "@tanstack/react-query";

export default function useQueryFetchUserCheckInfo() {
  const {
    userInfoStore: [userInfo, setUserInfo],
  } = useAppRepository();

  const { data, isPending } = useQuery({
    queryKey: [QueryKeys.UserCheckInfo],
    queryFn: () => getUserCheckInfo(),
  });

  useEffect(() => {
    if (data) {
      setUserInfo({ ...userInfo, userId: data.id });
    }
  }, [data]);

  return {
    data,
    isPending,
  };
}
