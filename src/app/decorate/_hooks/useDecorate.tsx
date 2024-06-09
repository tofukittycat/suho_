"use client";

import { useParams, useRouter } from "next/navigation";

import { useState } from "react";

import { toast } from "@/components/ui/use-toast";

import useMutateCreateWriteCharm from "./queries/useMutateCreateWriteCharm";

type InfoDataType = {
  sender: string | null;
  image: Blob | null;
};

export type UseDecorateType = ReturnType<typeof useDecorate>;

export default function useDecorate() {
  const params = useParams();
  const router = useRouter();

  const { writeCharm, isPending } = useMutateCreateWriteCharm();

  const [infoData, setInfoData] = useState<InfoDataType>({
    sender: null,
    image: null,
  });

  const treeId = params.treeId as string;

  const updateFields = (fields: Partial<InfoDataType>) => {
    setInfoData(prev => ({ ...prev, ...fields }));
  };

  const createWriteCharm = () => {
    const { sender, image } = infoData;

    if (!sender || !image) {
      toast({ description: "데이터가 존재하지 않음." });
      return;
    }

    writeCharm(
      {
        treeId: Number(treeId),
        sender,
        image,
      },
      {
        onSuccess: () => {
          router.replace("/home");
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
    treeId: Number(treeId),
    infoData,
    updateFields,
    createWriteCharm,
  };
}
