"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

type InfoDataType = {
  sender: string | null;
  image: string | null;
};

export type UseDecorateType = ReturnType<typeof useDecorate>;
export default function useDecorate() {
  const router = useRouter();

  const [infoData, setInfoData] = useState<InfoDataType>({
    sender: null,
    image: null,
  });

  const updateFields = (fields: Partial<InfoDataType>) => {
    setInfoData(prev => ({ ...prev, ...fields }));
  };

  return {
    router,
    infoData,
    updateFields,
  };
}
