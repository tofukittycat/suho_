import { useRouter } from "next/navigation";

import { useCallback } from "react";

export default function useLuckyTree() {
  const router = useRouter();

  const handleGoToHome = useCallback(() => {
    router.push("/");
  }, []);

  return {
    router,
    handleGoToHome,
  };
}
