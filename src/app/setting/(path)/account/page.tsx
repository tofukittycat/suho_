"use client";

import { useRouter } from "next/navigation";

import { ChangeEvent, useEffect, useState } from "react";

import { 십이간지시간Items } from "@/app/(login)/signin/_components/steps/InfoDateStep";
import NavFooter from "@/components/NavFooter";
import SHDateInputField from "@/components/base/SHDateInputField";
import SHInputField from "@/components/base/SHInputField";
import SHInputSelect from "@/components/base/SHInputSelect";
import SHLabel from "@/components/base/SHLabel";
import { SHSpinner } from "@/components/base/SHSpinner";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";

import useMutateUpdateUserInfo from "../../_hooks/queries/useMutateUpdateUserInfo";
import useQueryFetchUserInfo from "../../_hooks/queries/useQueryFetchUserInfo";

type UserAccountInfo = {
  birth: string;
  birthTime: string;
};

export default function page() {
  const router = useRouter();

  const { data: userInfoData, isPending } = useQueryFetchUserInfo();
  const { mutate: updateUserInfo } = useMutateUpdateUserInfo();

  const [updatedInfo, setUpdatedInfo] = useState<UserAccountInfo>({
    birth: userInfoData?.birth ?? "",
    birthTime: userInfoData?.birthTime ?? "",
  });

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdatedInfo({ ...updatedInfo, [name]: value });
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
      {isPending ? (
        <VCStack className="h-full">
          <SHSpinner />
        </VCStack>
      ) : (
        <VStack className="mt-[40px] gap-[30px]">
          <SHInputField
            label="이메일"
            type="email"
            name="email"
            value={userInfoData?.email}
            fontColor="white"
            onChange={handleChangeInput}
          />
          <SHDateInputField
            label="생년월일"
            name="birth"
            defaultValue={userInfoData?.birth}
            value={updatedInfo.birth}
            fontColor="white"
            className="text-white"
            onChange={handleChangeInput}
          />
          <SHInputSelect
            label="태어난 시간"
            name="birthTime"
            defaultValue={userInfoData?.birthTime}
            value={updatedInfo.birthTime}
            fontColor="white"
            items={십이간지시간Items}
            onChange={handleChangeInput}
          />
          <div className="mt-[100px]">
            <NavFooter
              ratio="1:1"
              left={{ disabled: isPending, onClick: router.back }}
              right={{ disabled: isPending, onClick: onSubmit }}
            />
          </div>
        </VStack>
      )}
    </VStack>
  );
}
