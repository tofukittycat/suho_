"use client";

import NavFooter from "@/components/NavFooter";
import SHInputField from "@/components/base/SHInputField";
import SHLabel from "@/components/base/SHLabel";
import VStack from "@/components/base/stack/VStack";

import PageLayout from "../../@components/PageLayout";
import useSignIn from "../../@hooks/useSignIn";

export default function page() {
  const { router, handleEmailSignIn } = useSignIn();

  return (
    <PageLayout>
      <VStack>
        <SHLabel type="SubTitle1" className="text-white">
          로그인해주세요
        </SHLabel>
        <VStack className="mt-[50px] gap-[50px]">
          {/* <Controller
            name="email"
            defaultValue={""}
            control={control}
            render={({ field }) => <InputField {...field} label="이메일 주소" type="email" />}
          /> */}
          <SHInputField label="이메일" type="email" fontColor="white" />
          {/* <Controller
            name="password"
            defaultValue={undefined}
            control={control}
            render={({ field }) => (
              <InputField {...field} type="password" autoComplete="new-password" label="비밀번호" />
            )}
          /> */}
          <SHInputField
            type="password"
            autoComplete="new-password"
            label="비밀번호"
            fontColor="white"
          />
        </VStack>
      </VStack>
      <VStack className="mt-[50px]">
        <NavFooter
          ratio="1:3"
          left={{ onClick: router.back }}
          right={{ onClick: handleEmailSignIn }}
        />
      </VStack>
    </PageLayout>
  );
}
