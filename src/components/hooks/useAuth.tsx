"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { useEffect } from "react";

import lStorage from "@/utils/storage";

export default function useAuth() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const path = usePathname();

  const handleClearToken = () => {
    lStorage.clearAll();
  };

  const set = (key: string, value: string) => {
    lStorage.set(key, value);
  };

  const get = (key: string) => {
    return lStorage.get(key);
  };

  useEffect(() => {
    // "/" 에서만 체크
    if (path !== "/") {
      return;
    }

    const token = searchParams.get("token");

    if (!token) {
      // 로그인 화면으로
      push("/signin");
      lStorage.clearAll();
    } else {
      // 홈 화면으로
      lStorage.set("token", token);
      push("/home");
    }
  }, [path]);

  return {
    handleClearToken,
    get,
    set,
  };
}
