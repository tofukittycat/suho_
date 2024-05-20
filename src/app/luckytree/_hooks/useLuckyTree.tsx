"use client";

import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import useMutateCreateLuckyTree from "@/app/luckytree/_hooks/queries/useMutateCreateLuckyTree";
import { useToast } from "@/components/ui/use-toast";

import useQueryFetchTreeFortune from "./queries/useQueryFetchTreeFortune";

type LuckyTreeInfoType = {
  luckyDate: string | null;
  tag: string | null;
};

export default function useLuckyTree() {
  const router = useRouter();
  const { toast } = useToast();

  const queryTreeFortune = useQueryFetchTreeFortune();
  const { mutate: createLuckyTree } = useMutateCreateLuckyTree();

  const [infoData, setInfoData] = useState<LuckyTreeInfoType>({ luckyDate: null, tag: null });

  const updateFields = (fields: Partial<LuckyTreeInfoType>) => {
    setInfoData(prev => ({ ...prev, ...fields }));
  };

  const handleGoToHome = useCallback(() => {
    router.push("/home");
  }, []);

  const handleGoToTreeFortuneResult = useCallback((treeId: string) => {
    router.push(`/luckytree/result/${treeId}`);
  }, []);

  const handleCreateLuckyTree = () => {
    const { luckyDate, tag } = infoData;

    if (!luckyDate || !tag) {
      console.error("나무 생성에 필요한 데이터가 없음.");
      return;
    }

    createLuckyTree(
      { luckyDate, tag },
      {
        onSuccess: data => {
          const treeId = data.id;
          handleGoToTreeFortuneResult(treeId);
        },
        onError(error) {
          toast({
            title: "Uh on! Error",
            description: `${error.message}`,
            duration: 2000,
          });
        },
      },
    );
  };

  return {
    router,
    infoData,
    queryTreeFortune,
    updateFields,
    handleGoToHome,
    handleGoToTreeFortuneResult,
    handleCreateLuckyTree,
  };
}

export type UseLuckyTreeType = ReturnType<typeof useLuckyTree>;
