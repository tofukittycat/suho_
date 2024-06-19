import useAppRepository from "@/components/hooks/useAppRepository";
import { QueryKeys } from "@/services/queryKeys";
import { useQuery } from "@tanstack/react-query";

import { getTodayHoroscope } from "../../../../services/horoscope";

export default function useQueryFetchTodayHoroscope() {
  const {
    userInfoStore: [userInfo],
  } = useAppRepository();

  const { data, isPending } = useQuery({
    queryKey: [QueryKeys.TodayHoroscope],
    queryFn: () => {
      if (!userInfo.userId) {
        return Promise.reject();
      }

      return getTodayHoroscope({ id: userInfo.userId });
    },
  });

  return {
    data,
    isPending,
  };
}
