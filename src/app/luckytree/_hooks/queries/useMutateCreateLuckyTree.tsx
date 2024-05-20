import { useMutation } from "@tanstack/react-query";

import { postCreateLuckyTree } from "../../../../services/luckytree";

export default function useMutateCreateLuckyTree() {
  const { mutate, isPending } = useMutation({
    mutationFn: ({ luckyDate, tag }: { luckyDate: string; tag: string }) =>
      postCreateLuckyTree({ luckyDate, tag }),
  });

  return {
    mutate,
    isPending,
  };
}
