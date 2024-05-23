import { deleteCharm } from "@/services/horoscope";
import { useMutation } from "@tanstack/react-query";

export default function useMutateRemoveCharm() {
  const { mutate, isPending } = useMutation({
    mutationFn: ({ charmId }: { charmId: number }) => deleteCharm({ charmId }),
  });

  return {
    mutate,
    isPending,
  };
}
