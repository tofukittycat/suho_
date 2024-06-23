"use client";

import { usePathname } from "next/navigation";

import { useEffect, useState } from "react";

export default function ExternalLinkHandler() {
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState("");

  useEffect(() => {
    handleRouteChange(pathname);
  }, []);

  const handleRouteChange = (url: string) => {
    const userAgent = navigator.userAgent;

    if (
      /inapp|naver|snapchat|wirtschaftswoche|thunderbird|instagram|everytimeapp|whatsApp|electron|wadiz|aliapp|zumapp|iphone(.*)whale|android(.*)whale|kakaostory|band|twitter|DaumApps|DaumDevice\/mobile|FB_IAB|FB4A|FBAN|FBIOS|FBSS|trill|SamsungBrowser\/[^1]/i.test(
        userAgent,
      )
    ) {
      if (/android/i.test(userAgent)) {
        window.location.href = `intent://${url.replace(/^https?:\/\//, "")}#Intent;scheme=http;package=com.android.chrome;end`;
      } else if (/iPhone|iPad|iPod/i.test(userAgent)) {
        // window.location.href = `googlechrome://${url.replace(/^https?:\/\//, "")}`;
        window.location.href = url;
        // setTimeout(() => {
        //   alert("This function is not supported in KakaoTalk in-app browser.");
        // }, 500);
      }
    } else {
      // window.location.href = url;
    }
  };

  return null; // 이 컴포넌트는 UI를 렌더링하지 않습니다.
}
