"use client";

import { useRouter } from "next/navigation";

import { useToast } from "@/components/ui/use-toast";

import useQueryFetchUserInfo from "../../setting/_hooks/queries/useQueryFetchUserInfo";

export default function useHome() {
  const router = useRouter();
  const { toast } = useToast();

  const { data: userInfoData } = useQueryFetchUserInfo();

  const handleGoToTodayHoroscope = () => {
    router.push("horoscope/today");
  };

  const handleGoToLuckyTree = () => {
    router.push("luckytree");
  };

  const treeURLCopyToClipboard = async () => {
    const textToCopy = `${process.env.NEXT_PUBLIC_BASE_URL}/home`;

    try {
      await navigator.clipboard.writeText(textToCopy);
      toast({ description: "URL이 복사되었어요!" });
    } catch (error) {
      console.error(error);
    }
  };

  return {
    router,
    userInfoData,
    handleGoToTodayHoroscope,
    handleGoToLuckyTree,
    treeURLCopyToClipboard,
  };
}

export type UseHomeType = ReturnType<typeof useHome>;
