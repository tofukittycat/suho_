"use client";

import { useEffect } from "react";

import CharmCustomizeSheet from "@/app/horoscope/_components/CharmCustomizeSheet";
import LuckyResultPending from "@/app/luckytree/_components/LuckyResultPending";
import CTAButton from "@/components/CTAButton";
import CTAContainer from "@/components/CTAContainer";
import ElementalLottie from "@/components/ElementalLottie";
import NavFooter from "@/components/NavFooter";
import SHCard from "@/components/base/SHCard";
import SHImage from "@/components/base/SHImage";
import SHLabel from "@/components/base/SHLabel";
import VStack from "@/components/base/stack/VStack";
import useAppRepository from "@/components/hooks/useAppRepository";
import dayjs from "dayjs";

import useLuckyTree from "../../../../_hooks/useLuckyTree";

/**
 *
 * params의 from
 * 1. 홈의 luckybox : from-LuckyBox
 * 2. 나무 생성 마지막 : from-CreateTree
 * 3. 공유 URL을 통해 들어옴 : from-Shared
 * 4. 행운부적 써주기 : from-WriteCharm
 */
export default function page({ params }: { params: { treeId: string; from: string } }) {
  const {
    router,
    handleGoToLuckyTreeRemove,
    handleGoToHome,
    handleGoToDecorateCharm,
    queryTreeFortune,
  } = useLuckyTree();
  const {
    userInfoStore: [userInfo],
  } = useAppRepository();
  const { data, isPending, fetchTreeFortune } = queryTreeFortune;

  const guardianData = data?.guardianResponse;
  const luckySpiritData = data?.luckySpiritResponse;

  const formattedDate = (value: string) => {
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
          {guardianData && luckySpiritData && (
            <VStack className="h-full w-full overflow-auto">
              {/* 수호 이미지 */}
              <VStack className="mt-[60px] px-[20px]">
                <VStack className="items-center gap-[5px]">
                  <SHLabel
                    type="Body2"
                    className="flex h-[28px] items-center justify-center rounded-[120px] bg-main-purple-suho px-[10px] py-[5px] text-white "
                  >
                    {formattedDate(luckySpiritData.luckyDate)}
                  </SHLabel>
                  <VStack className="shrink-0">
                    <SHImage
                      src={guardianData.imageURL ?? ""}
                      className="h-[420px] w-[300px] rounded-[30px] object-contain"
                    />
                  </VStack>
                </VStack>
              </VStack>

              {/* Tendency */}
              <SHLabel className="mx-[40px] my-[20px] whitespace-pre-wrap text-center text-[16px] font-[500] text-[#0B082B]">
                {guardianData.tendency}
              </SHLabel>

              {/* 총평 */}
              <VStack className="mx-[20px]">
                <SHCard className="mt-[20px] bg-[#0B082B] py-[44px]">
                  <VStack className="gap-[16px]">
                    <ElementalLottie luckySpirit={luckySpiritData.luckySpirit} />
                    <SHLabel type="SubTitle2" className="whitespace-pre-wrap text-white">
                      {userInfo?.username && `오늘 ${userInfo?.username ?? "유저"}님에게\n`}
                      <span className="text-[#A48AFF]">{`${luckySpiritData.luckySpirit}의 기운`}</span>
                      이 행운을 가져다줘요.
                    </SHLabel>
                    <SHLabel className="whitespace-pre-wrap text-[14px] font-[500] text-white">
                      {luckySpiritData.description}
                    </SHLabel>
                  </VStack>
                </SHCard>
              </VStack>

              {/* CTA */}
              <CTAContainer className="mt-[34px]">
                {(() => {
                  if (params.from === "from-LuckyBox") {
                    return (
                      <NavFooter
                        ratio="1:3"
                        left={{ onClick: router.back }}
                        right={{
                          children: <CharmCustomizeSheet onlyDownload={false} />,
                        }}
                      />
                    );
                  } else if (params.from === "from-CreateTree") {
                    return <CTAButton onClick={handleGoToHome}>내 행운 나무 보러가기</CTAButton>;
                  } else if (params.from === "from-WriteCharm") {
                    return (
                      <NavFooter
                        ratio="1:3"
                        left={{ onClick: router.back }}
                        right={{
                          children: "행운 부적 써주러 가기",
                          onClick: () => handleGoToDecorateCharm(Number(params.treeId)),
                        }}
                      />
                    );
                  } else {
                    return (
                      <CTAButton
                        className="bg-[#E4DCFF] text-[16px] font-[600] text-main-purple-suho hover:bg-[#d9d0f4]"
                        onClick={router.back}
                      >
                        이전
                      </CTAButton>
                    );
                  }
                })()}
              </CTAContainer>
            </VStack>
          )}
        </>
      )}
    </>
  );
}
