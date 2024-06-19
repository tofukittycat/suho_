import { useEffect } from "react";

import useAppRepository from "@/components/hooks/useAppRepository";
import useAuth from "@/components/hooks/useAuth";
import { QueryKeys } from "@/services/queryKeys";
import { getUserCheckInfo } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import { isEmpty } from "lodash";

export default function useQueryFetchUserCheckInfo() {
  const {
    userInfoStore: [userInfo, setUserInfo],
  } = useAppRepository();
  const { token } = useAuth();

  const { data, isPending } = useQuery({
    queryKey: [QueryKeys.UserCheckInfo],
    queryFn: () => getUserCheckInfo(),
    staleTime: 0,
    enabled: !isEmpty(token),
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
