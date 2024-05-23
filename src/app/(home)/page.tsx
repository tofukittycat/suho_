"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Suspense, useEffect } from "react";

import { SHGlobalSpinner } from "@/components/base/SHSpinner";
import useAuth from "@/components/hooks/useAuth";

function EntryRouting() {
  const searchParams = useSearchParams();
  const path = usePathname();

  const { push } = useRouter();
  const { isEmptyToken, updateToken } = useAuth();

  useEffect(() => {
    // "/" 에서만 체크
    if (path !== "/") {
      return;
    }

    // 로그인성공시 param으로 token이 들어옴
    const token = searchParams.get("token");

    if (token) {
      // 홈 화면으로
      updateToken(token);
      push("/home");
    } else {
      if (isEmptyToken) {
        push("/onboarding");
      } else {
        push("/home");
      }
    }
  }, [path, searchParams]);

  return <SHGlobalSpinner />;
}

// token 리다이렉션 page
export default function RedirectionEntryPage() {
  return (
    <Suspense fallback={<SHGlobalSpinner />}>
      <EntryRouting />
    </Suspense>
  );
}
