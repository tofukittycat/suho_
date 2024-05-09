"use client";

import { Controller } from "react-hook-form";

import PageLayout from "@/app/(login)/signin/@components/PageLayout";
import NavFooter from "@/components/NavFooter";
import SHInputField from "@/components/base/SHInputField";
import SHLabel from "@/components/base/SHLabel";
import VStack from "@/components/base/stack/VStack";

import useSignUp from "../../@hooks/useSignUp";

export default function page() {
  const { router, control, handleSignUp } = useSignUp();

  return (
    <PageLayout className="bg-white">
      <VStack>
        <SHLabel type="SubTitle1">이메일을 인증해주세요.</SHLabel>
        <VStack className="mt-[50px] gap-[50px]">
          <Controller
            name="password"
            defaultValue={undefined}
            control={control}
            render={({ field }) => (
              <SHInputField
                {...field}
                type="password"
                autoComplete="new-password"
                label="비밀번호"
              />
            )}
          />
          <Controller
            name="confirmPassword"
            defaultValue={undefined}
            control={control}
            render={({ field }) => (
              <SHInputField
                {...field}
                type="password"
                autoComplete="new-password"
                label="비밀번호를 다시 한번 입력해주세요."
              />
            )}
          />
        </VStack>
        <VStack className="mt-[50px]">
          <NavFooter
            ratio="1:3"
            left={{ onClick: router.back }}
            right={{ onClick: handleSignUp }}
          />
        </VStack>
      </VStack>
    </PageLayout>
  );
}
