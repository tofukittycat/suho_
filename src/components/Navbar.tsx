"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useMemo } from "react";

import { cn } from "@/lib/utils";

import VStack from "./base/stack/VStack";
import { NavIcons } from "./ui/icons/icons";

export default function Navbar() {
  const pathname = usePathname();

  const routes = useMemo(() => {
    return [
      {
        type: "홈",
        icon: NavIcons.tab_home,
        href: "/",
        isActive: pathname === "/", //
      },
      {
        type: "데일리 운세",
        icon: NavIcons.tab_suho,
        href: "/suho",
        isActive: pathname === "/suho",
      },
      {
        type: "부적 만들기",
        icon: NavIcons.tab_charm,
        href: "/charm",
        isActive: pathname === "/charm",
      },
      {
        type: "유저",
        icon: NavIcons.tab_user,
        href: "/me",
        isActive: pathname === "/me",
      },
    ];
  }, [pathname]);

  return (
    <section className="fixed bottom-0 z-50 flex h-[64px] w-full max-w-[430px] flex-col items-center justify-center bg-white">
      <nav className="mx-auto flex w-full px-3">
        {routes.map(route => (
          <Link
            key={route.type}
            href={route.href}
            className="relative flex flex-1 flex-col content-center items-center text-center"
          >
            <VStack sx={{ alignItems: "center", gap: "5px" }}>
              <route.icon className={cn("fill-[#D9D9D9]", route.isActive && "fill-[#14142B]")} />
              {
                <span
                  className={cn("text-[11px] font-[400]", route.isActive ? "visible" : "invisible")}
                >
                  {route.type}
                </span>
              }
            </VStack>
          </Link>
        ))}
      </nav>
    </section>
  );
}
