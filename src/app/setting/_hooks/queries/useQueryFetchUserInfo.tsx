import { useEffect } from "react";

import { userInfoState } from "@/components/hooks/useAppRepository";
import { QueryKeys } from "@/services/queryKeys";
import { getUserInfo } from "@/services/user";
import { useQuery } from "@tanstack/react-query";
import { useRecoilState } from "recoil";

export default function useQueryFetchUserInfo() {
  const [userInfo, setUserInfo] = useRecoilState(userInfoState);

  const { data, isPending } = useQuery({
    queryKey: [QueryKeys.UserInfo],
    queryFn: () => {
      return getUserInfo();
    },
    staleTime: 0,
  });

  useEffect(() => {
    if (data) {
      const { birth, birthTime, username } = data;

      setUserInfo({
        ...userInfo,
        birth,
        birthTime,
        username,
      });
    }
  }, [data]);

  return {
    data,
    isPending,
  };
}
