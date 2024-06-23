"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { Suspense, useEffect } from "react";

import { SHGlobalSpinner } from "@/components/base/SHSpinner";
import useAppRepository from "@/components/hooks/useAppRepository";
import useAuth from "@/components/hooks/useAuth";
import { getUserCheckInfo, getUserInfo } from "@/services/user";

function EntryRouting() {
  const {
    visibleBGStore: [visibleBG, setVisibleBG],
    userInfoStore: [userInfo, setUserInfo],
  } = useAppRepository();

  const searchParams = useSearchParams();
  const path = usePathname();

  const { push } = useRouter();
  const { isEmptyToken, updateToken } = useAuth();

  useEffect(() => {
    setVisibleBG(false);

    // 로그인성공시 param으로 token이 들어옴

    const handleRouting = async () => {
      const token = searchParams.get("token");

      if (token) {
        updateToken(token);

        const userCheckInfo = await getUserCheckInfo();
        const userInfo = await getUserInfo();

        setUserInfo({
          ...userInfo,
          userId: userCheckInfo.id,
          birth: userInfo.birth,
          birthTime: userInfo.birthTime,
          username: userInfo.username,
        });

        // 홈 화면으로
        if (userCheckInfo.hasInfo) {
          push("/home");
        } else {
          push("/signin/info");
        }
      } else {
        if (isEmptyToken) {
          push("/onboarding");
        } else {
          push("/home");
        }
      }
    };

    handleRouting();
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
