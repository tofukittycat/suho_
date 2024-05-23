import { deleteTree } from "@/services/luckytree";
import { useMutation } from "@tanstack/react-query";

export default function useMutateRemoveTree() {
  const { mutate, isPending } = useMutation({
    mutationFn: ({ treeId }: { treeId: number }) => deleteTree({ treeId }),
  });

  return {
    mutate,
    isPending,
  };
}
