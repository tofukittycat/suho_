import { createWriteCharm } from "@/services/decorate/getStickers";
import { useMutation } from "@tanstack/react-query";

export default function useMutateCreateWriteCharm() {
  const { mutate: writeCharm, isPending } = useMutation({
    mutationFn: ({ treeId, sender, image }: { treeId: number; sender: string; image: Blob }) => {
      return createWriteCharm({ treeId, sender, image });
    },
  });

  return {
    writeCharm,
    isPending,
  };
}
