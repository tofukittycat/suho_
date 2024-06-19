import { useRouter } from "next/navigation";

import useQueryFetchTodayHoroscope from "@/app/horoscope/_hooks/queries/useQueryFetchTodayHoroscope";

export default function useHoroscope() {
  const router = useRouter();

  return { router };
}
