"use client";

import { useRouter } from "next/navigation";

import HamburgerNav from "@/components/HamburgerNav";
import Label from "@/components/base/Label";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <VStack className="mx-[20px]">
        {/* Header */}
        <HStack className="mt-[40px] h-[60px] items-end justify-between">
          <VStack>
            <Label className="text-[16px] font-[800]">5월 8일 시험을 위한</Label>
            <Label className="text-[24px] font-[800]">
              <span className="text-main-purple-suho">승진</span>님의 행운 나무
            </Label>
          </VStack>
          <div>
            <HamburgerNav />
          </div>
        </HStack>
      </VStack>
    </main>
  );
}
