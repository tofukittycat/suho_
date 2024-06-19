"use client";

import { useRouter } from "next/navigation";

import { ChangeEvent, useEffect, useMemo, useState } from "react";

import { 십이간지시간Items } from "@/app/(login)/signin/_components/steps/InfoDateStep";
import CTAContainer from "@/components/CTAContainer";
import SHLabel from "@/components/base/SHLabel";
import { SHSpinner } from "@/components/base/SHSpinner";
import HStack from "@/components/base/stack/HStack";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";
import useToggle from "@/components/hooks/useToggle";
import { Button } from "@mui/material";

import WithdrawalBottomSheet from "../../_components/WithdrawalBottomSheet";
import useMutateUpdateUserInfo from "../../_hooks/queries/useMutateUpdateUserInfo";
import useQueryFetchUserInfo from "../../_hooks/queries/useQueryFetchUserInfo";

type UserAccountInfo = {
  birth: string;
  birthTime: string;
};

export default function page() {
  const router = useRouter();
  const { isOpen: isOpenWithdrawal, open: openWithdrawal, close: closeWithdrawal } = useToggle();

  const { data: userInfoData, isPending } = useQueryFetchUserInfo();
  const { mutate: updateUserInfo } = useMutateUpdateUserInfo();

  const [updatedInfo, setUpdatedInfo] = useState<UserAccountInfo>({
    birth: userInfoData?.birth ?? "",
    birthTime: userInfoData?.birthTime ?? "",
  });

  const formattingSocialType = useMemo(() => {
    if (userInfoData?.socialType === "kakao") {
      return "카카오 로그인";
    } else if (userInfoData?.socialType === "naver") {
      return "네이버 로그인";
    } else {
      return userInfoData?.socialType;
    }
  }, [userInfoData]);

  const formattingBirthType = useMemo(() => {
    // 0: 음력, 1: 양력
    if (userInfoData?.birthType === 0) {
      return "음력";
    } else if (userInfoData?.birthType === 1) {
      return "양력";
    } else {
      return userInfoData?.birthType;
    }
  }, [userInfoData]);

  const formattingBirthTime = useMemo(() => {
    return 십이간지시간Items.find(item => item.value === userInfoData?.birthTime);
  }, [userInfoData]);

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdatedInfo({ ...updatedInfo, [name]: value });
  };

  const handleWithdrawal = () => {
    openWithdrawal();
  };

  const onSubmit = () => {
    updateUserInfo(
      {
        birth: updatedInfo.birth,
        birthTime: updatedInfo.birthTime,
      },
      {
        onSuccess: () => {
          router.push("/home");
        },
      },
    );
  };

  useEffect(() => {
    if (userInfoData) {
      setUpdatedInfo({ birth: userInfoData.birth, birthTime: userInfoData.birthTime });
    }
  }, [userInfoData]);

  return (
    <VStack className="h-full px-[20px]">
      <div className="mt-[60px]">
        <SHLabel className="text-[20px] font-[700] text-white">계정 설정</SHLabel>
      </div>
      <SHLabel className="mt-[10px] text-[14px] font-[500] text-[#D1D5D9]">
        개인 정보는 수정이 불가능합니다. 만약 생년월일을 수정하고 싶다면 계정 삭제 후 다시 회원가입
        해주세요.
      </SHLabel>
      {isPending ? (
        <VCStack className="h-full">
          <SHSpinner />
        </VCStack>
      ) : (
        <VStack className="mt-[30px] gap-[30px]">
          <VStack className="gap-[7px]">
            <SHLabel className="text-[13px] font-[500] text-[#B8BFC4]">이메일 주소</SHLabel>
            <HStack sx={{ justifyContent: "space-between", alignItems: "baseline" }}>
              <SHLabel className="text-[20px] font-[500] text-white">{userInfoData?.email}</SHLabel>
              <SHLabel className="text-[14px] font-[500] text-white">
                {formattingSocialType}
              </SHLabel>
            </HStack>
          </VStack>

          <VStack className="gap-[7px]">
            <SHLabel className="text-[13px] font-[500] text-[#B8BFC4]">생년월일</SHLabel>
            <HStack sx={{ justifyContent: "space-between", alignItems: "baseline" }}>
              <SHLabel className="text-[20px] font-[500] text-white">{userInfoData?.birth}</SHLabel>
              <SHLabel className="text-[14px] font-[500] text-white">{formattingBirthType}</SHLabel>
            </HStack>
          </VStack>

          <VStack className="gap-[7px]">
            <SHLabel className="text-[13px] font-[500] text-[#B8BFC4]">태어난 시간</SHLabel>
            <SHLabel className="text-[20px] font-[500] text-white">
              {formattingBirthTime?.label}
            </SHLabel>
          </VStack>

          <Button
            sx={{
              color: "#B8BFC4",
              fontSize: "20px",
              fontWeight: "500",
              textAlign: "start",
              width: "100px",
              marginLeft: "-14px",
              mt: "20px",
            }}
            onClick={handleWithdrawal}
          >
            계정 삭제
          </Button>
        </VStack>
      )}
      <CTAContainer className="px-0">
        <Button
          sx={{
            height: "54px",
            borderRadius: "15px",
            bgcolor: "#7B57FC",
            fontSize: "16px",
            fontWeight: "600",
            color: "white",
          }}
          onClick={router.back}
        >
          이전
        </Button>
      </CTAContainer>
      {isOpenWithdrawal && (
        <WithdrawalBottomSheet isOpen={isOpenWithdrawal} onClose={closeWithdrawal} />
      )}
    </VStack>
  );
}
