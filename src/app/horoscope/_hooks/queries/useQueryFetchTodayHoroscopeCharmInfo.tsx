import { QueryKeys } from "@/services/queryKeys";
import { useQuery } from "@tanstack/react-query";

import { getTodayHoroscopeCharmInfo } from "../../../../services/horoscope";

export default function useQueryFetchTodayHoroscopeCharmInfo() {
  const { data, isPending } = useQuery({
    queryKey: [QueryKeys.TodayHoroscopeCharmInfo],
    queryFn: () => {
      return getTodayHoroscopeCharmInfo();
    },
  });

  return {
    data,
    isPending,
  };
}
