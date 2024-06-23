"use client";

import { useRouter } from "next/navigation";

import { useCallback, useState } from "react";

import useMutateCreateLuckyTree from "@/app/luckytree/_hooks/queries/useMutateCreateLuckyTree";
import SHImage from "@/components/base/SHImage";
import SHLabel from "@/components/base/SHLabel";
import VCStack from "@/components/base/stack/VCStack";
import useAppRepository from "@/components/hooks/useAppRepository";
import { useToast } from "@/components/ui/use-toast";

import useMutateRemoveTree from "./queries/useMutateRemoveTree";
import useQueryFetchTreeFortune from "./queries/useQueryFetchTreeFortune";

type LuckyTreeInfoType = {
  luckyDate: string | null;
  tag: string | null;
};

export default function useLuckyTree() {
  const router = useRouter();
  const { toast } = useToast();

  const {
    decorateInfoStore: [_, setDecorateInfo],
  } = useAppRepository();

  const queryTreeFortune = useQueryFetchTreeFortune();
  const { mutate: createLuckyTree, isPending: isPendingCreateLuckyTree } =
    useMutateCreateLuckyTree();
  const { mutate: removeLuckyTree } = useMutateRemoveTree();

  const [infoData, setInfoData] = useState<LuckyTreeInfoType>({ luckyDate: null, tag: null });

  const updateFields = (fields: Partial<LuckyTreeInfoType>) => {
    setInfoData(prev => ({ ...prev, ...fields }));
  };

  const handleGoToHome = useCallback(() => {
    router.push("/home");
  }, []);

  const handleGoToDecorateCharm = useCallback((treeId: number) => {
    router.push(`/decorate/${treeId}`);
    setDecorateInfo(prev => ({ ...prev, onlyDownload: false }));
  }, []);

  const handleGoToTreeFortuneResult = useCallback((treeId: string) => {
    router.push(`/luckytree/result/${treeId}/from-CreateTree`);
  }, []);

  const handleGoToLuckyTreeRemove = () => {
    router.push("/luckytree/remove");
  };

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
      },
    );
  };

  const handleRemoveLuckyTree = (treeId: number) => {
    removeLuckyTree(
      { treeId },
      {
        onSuccess: () => {
          handleGoToHome();

          toast({
            duration: 1500,
            customView: (
              <VCStack className="h-full w-full">
                <SHImage src="/imgs/icons/ic_sheet_tree.svg" className="h-[100px] w-[100px]" />
                <SHLabel className="mt-[16px] whitespace-pre-wrap text-center font-[600] leading-4 text-[#0B082B]">
                  {`행운나무가 삭제되었어요.\n`}
                  <span className="text-main-purple-suho">다른 행운나무를 만들어보세요.</span>
                </SHLabel>
              </VCStack>
            ),
          });
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
    isPendingCreateLuckyTree,
    updateFields,
    handleGoToHome,
    handleGoToDecorateCharm,
    handleGoToTreeFortuneResult,
    handleCreateLuckyTree,
    handleRemoveLuckyTree,
    handleGoToLuckyTreeRemove,
  };
}

export type UseLuckyTreeType = ReturnType<typeof useLuckyTree>;
