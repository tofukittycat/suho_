import { AddUserInfoType, postAddUserInfo } from "@/services/login/signin";
import { useMutation } from "@tanstack/react-query";

export default function useMutateAddUserInfo() {
  const { mutate, isPending } = useMutation({
    mutationFn: ({ birth, birthType, birthTime, name }: AddUserInfoType) =>
      postAddUserInfo({ birth, birthType, birthTime, name }),
  });

  return {
    mutate,
    isPending,
  };
}
