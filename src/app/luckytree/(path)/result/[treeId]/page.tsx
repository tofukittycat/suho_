"use client";

import { useParams } from "next/navigation";

import { useEffect } from "react";

import LuckyResultPending from "@/app/luckytree/_components/LuckyResultPending";
import SHCard from "@/components/base/SHCard";
import SHImage from "@/components/base/SHImage";
import SHLabel from "@/components/base/SHLabel";
import TreeBGView from "@/components/base/bg/TreeBGView";
import VStack from "@/components/base/stack/VStack";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";

import useLuckyTree from "../../../_hooks/useLuckyTree";

export default function page() {
  const { router, handleGoToHome, queryTreeFortune } = useLuckyTree();
  const { data, isPending, fetchTreeFortune } = queryTreeFortune;
  const params = useParams();

  const foramttedDate = (value: string) => {
    const date = dayjs(value);
    return `${date.month() + 1}월 ${date.date()}일의 행운 기운`;
  };

  useEffect(() => {
    if (!params.treeId) {
      return;
    }

    setTimeout(() => {
      fetchTreeFortune(Number(params.treeId));
    }, 2000);
  }, [params]);

  return (
    <>
      {isPending ? (
        <LuckyResultPending />
      ) : (
        <>
          {(() => {
            if (!data) {
              router.push("/signin");
              return;
            }

            const guardian = data.guardianResponse;
            const luckySpirit = data.luckySpiritResponse;

            return (
              <TreeBGView
                className="relative mt-0 overflow-auto"
                hiddenTree
                treeLayout={
                  <VStack className="mt-[60px]">
                    <VStack className="items-center gap-[5px]">
                      <SHLabel
                        type="Body2"
                        className="flex h-[28px] items-center justify-center rounded-[120px] bg-main-purple-suho px-[10px] py-[5px] text-white "
                      >
                        {foramttedDate(luckySpirit.luckyDate)}
                      </SHLabel>
                      <VStack className="mb-[-20px] mt-[26px] shrink-0">
                        <SHImage
                          src={guardian.imageURL ?? ""}
                          fallbackElement={<div>123</div>}
                          className="h-[420px] w-[300px] rounded-[30px] object-contain"
                        />
                      </VStack>
                    </VStack>
                  </VStack>
                }
                hillLayout={
                  <VStack className="h-full w-full">
                    <VStack className="mt-[40px] gap-[20px] px-[20px] pb-[40px]">
                      <SHLabel className="mx-[30px] mt-[30px] whitespace-pre-wrap text-center text-[16px] font-[500] text-[#0B082B]">
                        {guardian.tendency}
                      </SHLabel>
                      {/* 총평 */}
                      <SHCard className="mt-[30px] py-[24px]">
                        <VStack className="gap-[16px]">
                          <SHImage
                            src="https://github.com111/shad1.png"
                            size="80px"
                            fallbackElement={<div className="bg-gray-500"></div>}
                          />
                          <SHLabel type="SubTitle2" className="whitespace-pre-wrap text-[#525A61]">
                            {`오늘 유진님에게\n`}
                            <span className="text-[#FF6395]">불의 기운</span>이 행운을 가져다줘요.
                          </SHLabel>
                          <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-[#808991]">
                            {guardian.description}
                          </SHLabel>
                        </VStack>
                      </SHCard>
                      <Button
                        className="mt-[20px] h-[94px] w-full rounded-[15px] bg-main-purple-suho text-[16px] font-[600] text-white hover:bg-[#7553f0]"
                        onClick={handleGoToHome}
                      >
                        내 행운 나무 보러가기
                      </Button>
                    </VStack>
                  </VStack>
                }
              />
            );
          })()}
        </>
      )}
    </>
  );
}
