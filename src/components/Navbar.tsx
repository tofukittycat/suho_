import Link from "next/link";

import React from "react";

import { Icons } from "./ui/icons/icons";

const navs = [
  { type: "홈", icon: <Icons.tab_home /> },
  { type: "데일리 운세", icon: <Icons.tab_suho /> },
  { type: "부적 만들기", icon: <Icons.tab_charm /> },
  { type: "유저", icon: <Icons.tab_user /> },
];

export default function Navbar() {
  return (
    <section className="fixed bottom-0 flex h-16 w-full max-w-[430px] flex-col items-center justify-center bg-white">
      <nav className="mx-auto flex w-full px-3">
        {navs.map(({ type, icon }) => (
          <Link
            href="/"
            className="relative flex flex-1 flex-col content-center items-center text-center"
          >
            <div>{icon}</div>
            <span>{type}</span>
          </Link>
        ))}
      </nav>
    </section>
  );
}
