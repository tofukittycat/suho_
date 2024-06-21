import { getTodayHoroscopeStickerInfo } from "@/services/horoscope";
import { QueryKeys } from "@/services/queryKeys";
import { useQuery } from "@tanstack/react-query";
import { isEmpty } from "lodash";

export default function useQueryFetchTodayHoroscopeTreeStickers({
  imageURL,
}: {
  imageURL: string;
}) {
  const { data, isPending } = useQuery({
    queryKey: [QueryKeys.TreeStickers],
    queryFn: () => {
      return getTodayHoroscopeStickerInfo({ imageURL });
    },
    enabled: !isEmpty(imageURL),
    staleTime: 0,
  });

  return {
    data,
    isPending,
  };
}

export type UseFetchTodayHoroscopeTreeStickersType = ReturnType<
  typeof useQueryFetchTodayHoroscopeTreeStickers
>;
