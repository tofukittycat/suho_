import { useRouter } from "next/navigation";

export default function useHome() {
  const router = useRouter();

  const handleGoToTodayHoroscope = () => {
    router.push("horoscope/today");
  };

  return {
    handleGoToTodayHoroscope,
  };
}
