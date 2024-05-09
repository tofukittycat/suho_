"use client";

import React from "react";
import { Controller } from "react-hook-form";

import ConfirmButton from "@/app/(login)/signup/@components/ConfirmButton";
import useSignUp from "@/app/(login)/signup/@hooks/useSignUp";

import NavHeader from "../NavHeader";
import InputField from "../base/InputField";
import Label from "../base/Label";
import VStack from "../base/stack/VStack";

export default function CharmNameAddition() {
  const { control, handleSignUp } = useSignUp();

  return (
    <VStack>
      <NavHeader />
      <VStack className="mt-[16px] px-[20px]">
        <Label type="SubTitle1">보내시는 분을 적어주세요.</Label>
        <VStack className="mt-[50px] gap-[50px]">
          <Controller
            name="email"
            defaultValue=""
            control={control}
            render={({ field }) => <InputField {...field} label="FROM" type="name" />}
          />
          <div className="flex justify-between">
            <ConfirmButton onClick={handleSignUp}>다음</ConfirmButton>
            <ConfirmButton onClick={handleSignUp}>이전</ConfirmButton>
          </div>
        </VStack>
      </VStack>
    </VStack>
  );
}
