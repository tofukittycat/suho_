"use client";

import React from "react";
import { Controller } from "react-hook-form";

import NavHeader from "@/components/NavHeader";
import InputField, { InputFieldButton } from "@/components/base/InputField";
import Label from "@/components/base/Label";
import VStack from "@/components/base/stack/VStack";

import ConfirmButton from "../../@components/ConfirmButton";
import useSignUp from "../../@hooks/useSignUp";

export default function page() {
  const { control, handleConfirmEmail } = useSignUp();

  return (
    <VStack>
      <NavHeader />

      <VStack className="mt-[16px] px-[20px]">
        <Label type="SubTitle1">이메일을 인증해주세요.</Label>
        <VStack className="mt-[50px] gap-[50px]">
          <Controller
            name="email"
            defaultValue={""}
            control={control}
            render={({ field }) => (
              <InputField
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
              <InputField {...field} type="text" autoComplete="one-time-code" label="인증번호" />
            )}
          />
          <ConfirmButton onClick={handleConfirmEmail}>확인</ConfirmButton>
        </VStack>
      </VStack>
    </VStack>
  );
}
