"use client";

import { Controller } from "react-hook-form";

import PageLayout from "@/app/(login)/signin/@components/PageLayout";
import NavFooter from "@/components/NavFooter";
import SHInputField, { InputFieldButton } from "@/components/base/SHInputField";
import SHLabel from "@/components/base/SHLabel";
import VStack from "@/components/base/stack/VStack";

import useSignUp from "../../@hooks/useSignUp";

export default function page() {
  const { router, control, handleConfirmEmail } = useSignUp();

  return (
    <PageLayout className="bg-white">
      <VStack>
        <SHLabel type="SubTitle1">이메일을 인증해주세요.</SHLabel>
        <VStack className="mt-[50px] gap-[50px]">
          <Controller
            name="email"
            defaultValue={""}
            control={control}
            render={({ field }) => (
              <SHInputField
                {...field}
                label="이메일 주소"
                type="email"
                InputProps={{
                  endAdornment: <InputFieldButton>인증하기</InputFieldButton>,
                }}
              />
            )}
          />
          <Controller
            name="certificationNumber"
            defaultValue={undefined}
            control={control}
            render={({ field }) => (
              <SHInputField {...field} type="text" autoComplete="one-time-code" label="인증번호" />
            )}
          />
        </VStack>
      </VStack>
      <VStack className="mt-[50px]">
        <NavFooter
          ratio="1:3"
          left={{ onClick: router.back }}
          right={{ onClick: handleConfirmEmail }}
        />
      </VStack>
    </PageLayout>
  );
}
