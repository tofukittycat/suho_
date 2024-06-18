import { deleteCharm } from "@/services/horoscope";
import { QueryKeys } from "@/services/queryKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useMutateRemoveCharm() {
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ charmId }: { charmId: number }) => deleteCharm({ charmId }),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.TreeCharms],
      });
    },
  });

  return {
    mutate,
    isPending,
  };
}
