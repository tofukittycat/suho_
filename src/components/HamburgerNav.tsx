"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useMemo, useState } from "react";
import { GiHamburgerMenu as HamburgerMenuIcon } from "react-icons/gi";
import { IoClose as CloseIcon } from "react-icons/io5";

import useQueryFetchProfileUserInfo from "@/app/(login)/signin/_hooks/queries/useQueryFetchProfileUserInfo";
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { 이용약관URL } from "@/constants";
import { isEmpty } from "lodash";

import HDivider from "./HDivider";
import SHLabel from "./base/SHLabel";
import HStack from "./base/stack/HStack";
import VStack from "./base/stack/VStack";
import useAppRepository from "./hooks/useAppRepository";
import useAuth from "./hooks/useAuth";
import { Avatar, AvatarImage } from "./ui/avatar";

/* eslint-disable indent */
export default function HamburgerNav() {
  const router = useRouter();
  const { token } = useAuth();

  const {
    userInfoStore: [userInfo, setUserInfo],
  } = useAppRepository();

  const { data: profileUserInfo, isPending } = useQueryFetchProfileUserInfo();

  const [isOpen, setIsOpen] = useState(false);

  const routes = useMemo(() => {
    return {
      main:
        isEmpty(token) && !userInfo.owner
          ? [{ type: "행운 나무 만들기", href: "/signin" }]
          : [
              { type: "홈", href: "/home" },
              { type: "행운 나무 설정", href: "/luckytree/remove" },
              { type: "데일리 운세 보기", href: "/horoscope/today" },
            ],
      sub:
        isEmpty(token) && !userInfo.owner
          ? [
              { type: "자주 묻는 질문", href: "/setting/help-center" },
              { type: "이용약관", href: 이용약관URL },
              { type: "로그인", href: "/signin" },
            ]
          : [
              { type: "계정 설정", href: "/setting/account" },
              { type: "자주 묻는 질문", href: "/setting/help-center" },
              { type: "이용약관", href: 이용약관URL },
              { type: "로그아웃", href: "/signin" },
            ],
    };
  }, []);

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>
        <HamburgerMenuIcon className="size-[22px] text-white" />
      </DrawerTrigger>
      <DrawerContent className="left-auto right-0 top-0 mt-0 h-screen w-[80%] rounded-none md:w-[400px]">
        <VStack className="m-[26px] h-full justify-between">
          <VStack>
            {/* close */}
            <HStack className="my-[12px] justify-end">
              <DrawerClose>
                <CloseIcon className="size-[24px] text-[#0B082B]" />
              </DrawerClose>
            </HStack>
            {/* User Profile */}
            {profileUserInfo?.imageURL ? (
              <HStack className="items-center gap-[16px]">
                <Avatar className="size-[48px] rounded-full">
                  <AvatarImage src={profileUserInfo?.imageURL} />
                </Avatar>
                <SHLabel className="text-[20px] font-[700]">
                  <span className="text-main-purple-suho">{`${profileUserInfo.color} ${profileUserInfo.animal} ${profileUserInfo.name}`}</span>
                  님
                </SHLabel>
              </HStack>
            ) : (
              <HStack className="items-center gap-[16px]">
                <img src="/imgs/logo_blue.svg" alt="logo" />
              </HStack>
            )}

            <HDivider className="my-[25px]" />
            <nav className="flex flex-col gap-[14px]">
              {routes.main.map(route => (
                <Link
                  key={route.type}
                  href={route.href}
                  className="text-[20px] font-[800] text-[#0B082B]"
                >
                  {route.type}
                </Link>
              ))}
              <HDivider className="my-[15px]" />
              {routes.sub.map(route => (
                <Link
                  key={route.type}
                  href={route.href}
                  className="text-[16px] font-[500] text-[#40474D]"
                >
                  {route.type}
                </Link>
              ))}
            </nav>
          </VStack>
        </VStack>
      </DrawerContent>
    </Drawer>
  );
}
