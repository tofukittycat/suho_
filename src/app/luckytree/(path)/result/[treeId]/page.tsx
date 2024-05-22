"use client";

import { useParams } from "next/navigation";

import { useEffect } from "react";

import LuckyResultPending from "@/app/luckytree/_components/LuckyResultPending";
import ElementalLottie from "@/components/ElementalLottie";
import SHCard from "@/components/base/SHCard";
import SHImage from "@/components/base/SHImage";
import SHLabel from "@/components/base/SHLabel";
import TreeBGView from "@/components/base/bg/TreeBGView";
import VStack from "@/components/base/stack/VStack";
import useAppRepository from "@/components/hooks/useAppRepository";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";

import useLuckyTree from "../../../_hooks/useLuckyTree";

export default function page() {
  const { router, handleGoToHome, queryTreeFortune } = useLuckyTree();
  const {
    userInfoStore: [userInfo],
  } = useAppRepository();
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
                treeLayoutClassName="static z-10 w-full h-[480px]"
                treeLayout={
                  <VStack className="mt-[60px]">
                    <VStack className="items-center gap-[5px]">
                      <SHLabel
                        type="Body2"
                        className="flex h-[28px] items-center justify-center rounded-[120px] bg-main-purple-suho px-[10px] py-[5px] text-white "
                      >
                        {foramttedDate(luckySpirit.luckyDate)}
                      </SHLabel>
                      <VStack className="mb-[-20px] mt-[26px] shrink-0 ">
                        <SHImage
                          src={guardian.imageURL ?? ""}
                          fallbackElement={<div>수호 이미지</div>}
                          className="h-[420px] w-[300px] rounded-[30px] object-contain"
                        />
                      </VStack>
                    </VStack>
                  </VStack>
                }
                hillLayoutClassName="static z-0 bg-cover h-full bg-center"
                hillLayout={
                  <VStack className="w-full">
                    <VStack className="mb-[20px] mt-[40px] h-full gap-[20px] px-[20px]">
                      <SHLabel className="mx-[30px] mt-[30px] whitespace-pre-wrap text-center text-[16px] font-[500] text-[#0B082B]">
                        {guardian.tendency}
                      </SHLabel>
                      {/* 총평 */}
                      <SHCard className="mt-[30px] bg-[#0B082B] py-[44px]">
                        <VStack className="gap-[16px]">
                          <ElementalLottie luckySpirit={luckySpirit.luckySpirit} />
                          <SHLabel type="SubTitle2" className="whitespace-pre-wrap text-white">
                            {`오늘 ${userInfo?.username ?? "유저"}님에게\n`}
                            <span className="text-[#A48AFF]">{`${luckySpirit.luckySpirit}의 기운`}</span>
                            이 행운을 가져다줘요.
                          </SHLabel>
                          <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-white">
                            {guardian.description}
                          </SHLabel>
                        </VStack>
                      </SHCard>
                      <div>
                        <Button
                          className=" mt-[20px] h-[54px] w-full rounded-[15px] bg-main-purple-suho text-[16px] font-[600] text-white hover:bg-[#7553f0]"
                          onClick={handleGoToHome}
                        >
                          내 행운 나무 보러가기
                        </Button>
                      </div>
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
