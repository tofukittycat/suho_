import useAppRepository from "@/components/hooks/useAppRepository";
import { patchUpdateUserInfo } from "@/services/user";
import { useMutation } from "@tanstack/react-query";

export default function useMutateUpdateUserInfo() {
  const {
    userInfoStore: [userInfo, setUserInfo],
  } = useAppRepository();

  const { mutate, isPending } = useMutation({
    mutationFn: ({ birth, birthTime }: { birth: string; birthTime: string }) =>
      patchUpdateUserInfo({ userId: userInfo.userId ?? 0, birth, birthTime }),
    onSuccess(data) {
      setUserInfo({
        ...userInfo,
        birth: data.birth,
        birthTime: data.birthTime,
        username: data.username,
      });
    },
  });

  return {
    mutate,
    isPending,
  };
}
