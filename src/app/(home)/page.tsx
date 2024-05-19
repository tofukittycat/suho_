"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Suspense, useEffect } from "react";

import { SHGlobalSpinner } from "@/components/base/SHSpinner";
import useStorage from "@/components/hooks/useAuth";

function EntryRouting() {
  const { push } = useRouter();

  const searchParams = useSearchParams();
  const path = usePathname();

  const { set, clearStorage } = useStorage();

  useEffect(() => {
    // "/" 에서만 체크
    if (path !== "/") {
      return;
    }

    const token = searchParams.get("token");

    if (!token) {
      // 로그인 화면으로
      push("/signin");
      clearStorage();
    } else {
      // 홈 화면으로
      set("token", token);
      push("/home");
    }
  }, [path, searchParams]);

  return <SHGlobalSpinner />;
}

// token 리다이렉션 page
export default function RedirectionEntryPage() {
  return (
    <Suspense>
      <EntryRouting />
    </Suspense>
  );
}
