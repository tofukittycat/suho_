"use client";

import { Controller } from "react-hook-form";

import NavHeader from "@/components/NavHeader";
import InputField from "@/components/base/InputField";
import Label from "@/components/base/Label";
import VStack from "@/components/base/stack/VStack";

import ConfirmButton from "../../@components/ConfirmButton";
import useSignUp from "../../@hooks/useSignUp";

export default function page() {
  const { control, handleSignUp } = useSignUp();

  return (
    <VStack>
      <NavHeader />

      <VStack className="mt-[16px] px-[20px]">
        <Label type="SubTitle1">이메일을 인증해주세요.</Label>
        <VStack className="mt-[50px] gap-[50px]">
          <Controller
            name="password"
            defaultValue={undefined}
            control={control}
            render={({ field }) => (
              <InputField {...field} type="password" autoComplete="new-password" label="비밀번호" />
            )}
          />
          <Controller
            name="confirmPassword"
            defaultValue={undefined}
            control={control}
            render={({ field }) => (
              <InputField
                {...field}
                type="password"
                autoComplete="new-password"
                label="비밀번호를 다시 한번 입력해주세요."
              />
            )}
          />
          <ConfirmButton onClick={handleSignUp}>확인</ConfirmButton>
        </VStack>
      </VStack>
    </VStack>
  );
}
