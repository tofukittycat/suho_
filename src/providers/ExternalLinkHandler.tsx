"use client";

import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

export default function ExternalLinkHandler() {
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState("");

  useEffect(() => {
    if (pathname !== lastPath) {
      handleRouteChange(pathname);
      setLastPath(pathname);
    }
  }, [pathname, lastPath]);

  const handleRouteChange = (url: string) => {
    const userAgent = navigator.userAgent;

    if (/KAKAOTALK/i.test(userAgent)) {
      if (/android/i.test(userAgent)) {
        window.location.href = `intent://${url.replace(/^https?:\/\//, "")}#Intent;scheme=http;package=com.android.chrome;end`;
      } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        window.location.href = `googlechrome://${url.replace(/^https?:\/\//, "")}`;

        // setTimeout(() => {
        //   alert("This function is not supported in KakaoTalk in-app browser.");
        // }, 500);
      }
    } else {
      window.location.href = url;
    }
  };

  return null; // 이 컴포넌트는 UI를 렌더링하지 않습니다.
}
