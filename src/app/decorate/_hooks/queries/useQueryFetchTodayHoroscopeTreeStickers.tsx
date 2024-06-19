import { getTodayHoroscopeStickerInfo } from "@/services/horoscope";
import { QueryKeys } from "@/services/queryKeys";
import { useQuery } from "@tanstack/react-query";

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
  });

  return {
    data,
    isPending,
  };
}

export type UseFetchTodayHoroscopeTreeStickersType = ReturnType<
  typeof useQueryFetchTodayHoroscopeTreeStickers
>;
