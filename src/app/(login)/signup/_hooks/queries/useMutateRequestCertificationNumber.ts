import { useMutation } from "@tanstack/react-query";

import { postRequestCertificationNumber } from "../../../../../services/login/signup";

export default function useMutateRequestCertificationNumber() {
  const { mutate, isPending } = useMutation({
    mutationFn: (email: string) => postRequestCertificationNumber({ email }),
  });

  return {
    mutate,
    isPending,
  };
}
