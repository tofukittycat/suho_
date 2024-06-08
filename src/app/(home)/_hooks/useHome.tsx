"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import useAppRepository from "@/components/hooks/useAppRepository";
import { useToast } from "@/components/ui/use-toast";

export default function useHome() {
  const router = useRouter();
  const { toast } = useToast();

  const {
    visibleBGStore: [_, setVisibleBG],
    userInfoStore: [userInfo],
  } = useAppRepository();

  const handleGoToTodayHoroscope = () => {
    router.push("horoscope/today");
  };

  const handleGoToWriteCharm = (treeId: number) => {
    router.push(`/luckytree/result/${treeId}/from-WriteCharm`);
  };

  const handleGoToLuckyTreeCreate = () => {
    if (userInfo.userId) {
      if (userInfo.treeId) {
        toast({ description: "이미 행운 나무가 존재합니다." });
      } else {
        router.push("luckytree/create");
      }
    } else {
      router.replace("/signin");
    }
  };

  const treeURLCopyToClipboard = async ({
    treeId,
    userId,
  }: {
    treeId: number | null | undefined;
    userId: number | null | undefined;
  }) => {
    if (treeId && userId) {
      const textToCopy = `https://onsuho.com/home?shTI=${treeId}&shUI=${userId}`;

      try {
        await navigator.clipboard.writeText(textToCopy);
        toast({ description: "URL이 복사되었어요!" });
      } catch (error) {
        console.error(error);
      }
    } else {
      toast({ description: "회원 정보가 존재하지 않습니다. 다시 로그인 부탁드려요." });
    }
  };

  useEffect(() => {
    setVisibleBG(true);
  }, []);

  return {
    router,
    handleGoToTodayHoroscope,
    handleGoToLuckyTreeCreate,
    handleGoToWriteCharm,
    treeURLCopyToClipboard,
  };
}

export type UseHomeType = ReturnType<typeof useHome>;
