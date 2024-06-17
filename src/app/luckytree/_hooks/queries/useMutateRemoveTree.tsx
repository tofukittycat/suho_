import { deleteTree } from "@/services/luckytree";
import { QueryKeys } from "@/services/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutateRemoveTree() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ treeId }: { treeId: number }) => deleteTree({ treeId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.TreeInfo],
      });
    },
  });

  return {
    mutate,
    isPending,
  };
}
