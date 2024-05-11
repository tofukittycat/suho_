"use client";

import Link from "next/link";

import { useMemo, useState } from "react";
import { GiHamburgerMenu as HamburgerMenuIcon } from "react-icons/gi";

import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";

import SHLabel from "./base/SHLabel";
import HStack from "./base/stack/HStack";
import VStack from "./base/stack/VStack";
import { Avatar, AvatarImage } from "./ui/avatar";

export default function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false);

  const routes = useMemo(() => {
    return [
      { type: "내 행운나무", href: "/" },
      { type: "데일리 운세 보기", href: "/" },
      { type: "계정 설정", href: "/" },
      { type: "자주 묻는 질문", href: "/" },
    ];
  }, []);

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>
        <HamburgerMenuIcon className="size-[22px] text-white" />
      </DrawerTrigger>
      <DrawerContent className="left-auto right-0 top-0 mt-0 h-screen w-[80%] rounded-none md:w-[400px]">
        <VStack className="m-[26px] h-full justify-between">
          <VStack>
            <VStack className="gap-[16px]">
              <Avatar className="size-[64px]">
                <AvatarImage src="https://github.com/shadcn.png" />
              </Avatar>
              <SHLabel className="text-[24px] font-[800]">
                <span className="text-main-purple-suho">푸른 양 승진</span>님
              </SHLabel>
            </VStack>
            <nav className="mt-[20px] flex flex-col gap-[20px]">
              {routes.map(route => (
                <Link
                  key={route.type}
                  href={route.href}
                  className="text-[16px] font-[500] text-[#40474D]"
                  onClick={handleDrawerClose}
                >
                  {route.type}
                </Link>
              ))}
            </nav>
          </VStack>
          <HStack className="gap-[30px]">
            <Link
              href={"/"}
              className="text-[16px] font-[500] text-[#40474D]"
              onClick={handleDrawerClose}
            >
              이용약관
            </Link>
            <Link
              href={"/"}
              className="text-[16px] font-[500] text-[#40474D]"
              onClick={handleDrawerClose}
            >
              로그아웃
            </Link>
          </HStack>
        </VStack>
      </DrawerContent>
    </Drawer>
  );
}
