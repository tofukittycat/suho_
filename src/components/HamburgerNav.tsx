"use client";

import Link from "next/link";

import { useMemo, useState } from "react";
import { GiHamburgerMenu as HamburgerMenuIcon } from "react-icons/gi";
import { IoClose as CloseIcon } from "react-icons/io5";

import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import HDivider from "./HDivider";
import SHLabel from "./base/SHLabel";
import HStack from "./base/stack/HStack";
import VStack from "./base/stack/VStack";
import { Avatar, AvatarImage } from "./ui/avatar";

export default function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = useMemo(() => {
    return {
      main: [
        { type: "홈", href: "/home" },
        { type: "행운 나무 설정", href: "/horoscope/remove" },
        { type: "데일리 운세 보기", href: "/horoscope/today" },
      ],
      sub: [
        { type: "계정 설정", href: "/setting/account" },
        { type: "자주 묻는 질문", href: "/" },
        { type: "이용약관", href: "/" },
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
            <HStack className="items-center gap-[16px]">
              <Avatar className="size-[48px] rounded-full">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <SHLabel className="text-[20px] font-[700]">
                <span className="text-main-purple-suho">푸른 양 승진</span>님
              </SHLabel>
            </HStack>
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
              <HDivider className="my-[25px]" />
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
