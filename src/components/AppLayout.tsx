"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { ReactNode } from "react";

import { useIsClient } from "@uidotdev/usehooks";

import HCStack from "./base/stack/HCStack";
import VCStack from "./base/stack/VCStack";
import useAppRepository from "./hooks/useAppRepository";

type AppLayoutProps = {
  children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProps) {
  const {
    userInfoStore: [userInfo],
    visibleBGStore: [visibleBG],
  } = useAppRepository();

  const { replace } = useRouter();
  const isClient = useIsClient();

  const handleGoToHome = () => {
    if (userInfo.owner) {
      replace("/home");
    } else {
      replace(`/home?shTI=${userInfo.treeId}&shUI=${userInfo.userId}`);
    }
  };

  return (
    <>
      {isClient && (
        <VCStack className="relative h-full w-screen justify-center bg-gradient-to-b from-[#030329] to-[#9E83FF] bg-cover">
          <VCStack className="h-full w-full justify-center bg-[url(/imgs/back.svg)] bg-cover bg-center ">
            {/* 로고 */}
            <div className="invisible absolute left-[57px] top-[66px] h-[20px] w-[200px] cursor-pointer text-white lg:visible">
              <Image fill src={"/imgs/logo.svg"} alt="logo" onClick={handleGoToHome} />
            </div>
            {/* Content */}
            <HCStack className="z-10 h-dvh w-full min-w-[375px] max-w-[430px]">{children}</HCStack>
            {/* BG_BOTTOM(언덕) */}
            {visibleBG && (
              <div className="absolute bottom-0 left-0 right-0 z-0 h-[35%] w-full bg-[url('/imgs/bg_bottom.svg')] bg-top bg-no-repeat" />
            )}
          </VCStack>
        </VCStack>
      )}
    </>
  );
}
