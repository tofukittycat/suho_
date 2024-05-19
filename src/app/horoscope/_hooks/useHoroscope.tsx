import useQueryFetchTodayHoroscope from "@/app/horoscope/_hooks/queries/useQueryFetchTodayHoroscope";

export default function useHoroscope() {
  const fetchTodayHoroscope = useQueryFetchTodayHoroscope({ id: "17" });

  return { fetchTodayHoroscope };
}
