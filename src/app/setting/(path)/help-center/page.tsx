"use client";

import { useRouter } from "next/navigation";

import { useEffect } from "react";

import CTAContainer from "@/components/CTAContainer";
import NavFooter from "@/components/NavFooter";
import SHLabel from "@/components/base/SHLabel";
import VStack from "@/components/base/stack/VStack";
import useAppRepository from "@/components/hooks/useAppRepository";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 일대일문의URL } from "@/constants";

const data = [
  {
    title: "행운나무 설정을 바꿀 수 없나요?",
    contents: [
      "메뉴에서 행운나무 설정 페이지에서 바꿀 수 있어요",
      "행운나무 설정에서는 행운이 필요한 이유만 변경할 수 있어요.",
      "만약 행운이 필요한 날을 변경하고 싶으시다면 기존 행운나무를 삭제 후 새로 나무를 만드셔야 해요.",
      "다만 삭제 시 기존 나무에 있던 부적은 모두 사라진다는 점 유의해 주세요.",
      "부적은 간직하고 싶다면 다운로드 받아주세요",
    ],
  },
  {
    title: "행운나무를 여러개 만들 수 없나요?",
    contents: [
      "한번에 한개의 나무만 만들 수 있어요",
      "만약 트리 설정을 변경하고 싶으시다면 기존 계정 탈퇴 후 새로 계정을 만드셔야 해요.",
      "다만 탈퇴 시 기존 트리에 있던 메시지는 모두 사라진다는 점 유의해 주세요.",
    ],
  },
  {
    title: "링크 복사가 안 돼요",
    contents: [
      "문제가 생긴 웹 브라우저가 어떤 브라우저인지 확인하신 후 사용 중인 브라우저 외에 다른 웹 브라우저를 사용해보세요. (삼성 인터넷, 카카오 웹, 크롬, 웨일 등)",
      "그래도 링크 복사가 되지 않는다면 행운 나무 하단에 있는 링크 복사 버튼 외에 브라우저 자체에 있는 공유하기 혹은 주소창 복사를 통해 나무 링크를 복사할 수 있어요.",
    ],
  },
  {
    title: "행운나무에 달린 부적을 삭제할 수 있나요?",
    contents: [
      "행운나무에 달린 부적은 행운이 필요한 날 3일 전에 볼 수 있을 때부터 행운나무 주인이 직접 삭제할 수 있어요.",
    ],
  },
  {
    title: "다른 사람 행운나무에 단 행운부적을 지우고 싶어요",
    contents: [
      "‘내 부적을 써줘!'는 개인정보처리 관련 이슈로 개별 행운나무의 부적에 대한 처리를 도와드리기 어려워요.",
      "행운나무에 달린 행운부적은 나무 주인만 삭제할 수 있어요.",
    ],
  },
  {
    title: "‘내 부적을 써줘!’에 빈 화면만 나와요.",
    contents: [
      "브라우저 캐시에 문제가 생기면 일시적으로 화면을 불러오지 못할 수 있어요.",
      "그 경우, 문제가 생긴 웹 브라우저가 어떤 브라우저인지 확인하신 후 사용 중인 브라우저 외에 다른 웹 브라우저를 사용해보세요. (삼성 인터넷, 카카오 웹, 크롬, 웨일 등)",
    ],
  },
];

export default function page() {
  const {
    visibleBGStore: [_, setVisibleBG],
  } = useAppRepository();

  const router = useRouter();

  const handleOneOnOne = () => {
    window.location.href = 일대일문의URL;
  };

  useEffect(() => {
    setVisibleBG(false);

    return () => {
      setVisibleBG(true);
    };
  }, []);

  return (
    <VStack className="h-full overflow-auto px-[20px]">
      <div className="mt-[60px]">
        <SHLabel className="text-[20px] font-[700] text-white">계정 설정</SHLabel>
      </div>
      <Accordion type="single" collapsible className="mt-[36px]">
        {data.map((item, index) => (
          <AccordionItem value={`item-${index}`}>
            <AccordionTrigger className="text-[12px] font-[600] text-white">
              {item.title}
            </AccordionTrigger>
            {item.contents.map(content => (
              <AccordionContent className="whitespace-pre-line text-[12px] font-[500] text-white">
                {content}
              </AccordionContent>
            ))}
          </AccordionItem>
        ))}
      </Accordion>
      <CTAContainer className="px-0">
        <NavFooter
          ratio="1:1"
          left={{ onClick: router.back }}
          right={{ children: "1:1 문의하기", onClick: handleOneOnOne }}
        />
      </CTAContainer>
    </VStack>
  );
}
