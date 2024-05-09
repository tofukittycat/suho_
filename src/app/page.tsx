"use client";

import { useRouter } from "next/navigation";

import HamburgerNav from "@/components/HamburgerNav";
import SHLabel from "@/components/base/SHLabel";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { push } = useRouter();

  return (
    <main>
      <VStack className="mx-[20px]">
        {/* Header */}
        <HStack className="mt-[40px] h-[60px] items-end justify-between">
          <VStack>
            <SHLabel className="text-[16px] font-[800]">5월 8일 시험을 위한</SHLabel>
            <SHLabel className="text-[24px] font-[800]">
              <span className="text-main-purple-suho">승진</span>님의 행운 나무
            </SHLabel>
          </VStack>
          <div>
            <HamburgerNav />
          </div>
        </HStack>

        <Button
          onClick={() => {
            push("signin");
          }}
        >
          로그인
        </Button>
      </VStack>
    </main>
  );
}
