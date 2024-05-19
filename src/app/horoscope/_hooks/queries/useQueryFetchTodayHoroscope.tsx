import { QueryKeys } from "@/services/queryKeys";
import { useQuery } from "@tanstack/react-query";

import { getTodayHoroscope } from "../../../../services/horoscope";

type UseQueryFetchTodayHoroscopeProps = {
  id: string;
};

export default function useQueryFetchTodayHoroscope({ id }: UseQueryFetchTodayHoroscopeProps) {
  const { data, isPending } = useQuery({
    queryKey: [QueryKeys.TodayHoroscope],
    queryFn: () => getTodayHoroscope({ id }),
  });

  return {
    data,
    isPending,
  };
}
