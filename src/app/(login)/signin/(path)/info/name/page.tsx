"use client";

import NavFooter from "@/components/NavFooter";
import SHInputField from "@/components/base/SHInputField";
import SHLabel from "@/components/base/SHLabel";
import VStack from "@/components/base/stack/VStack";

import PageLayout from "../../../_components/PageLayout";
import useSignIn from "../../../_hooks/useSignIn";

export default function page() {
  const { router, handleGoToHome } = useSignIn();

  return (
    <PageLayout>
      <VStack>
        <SHLabel type="SubTitle1" className="text-white">
          이름을 입력해주세요.
        </SHLabel>
        <VStack className="mt-[50px] gap-[50px]">
          {/* <Controller
            name="email"
            defaultValue={""}
            control={control}
            render={({ field }) => <InputField {...field} label="이메일 주소" type="email" />}
          /> */}
          <SHInputField label="이름" type="text" fontColor="white" />
        </VStack>
      </VStack>
      <VStack className="mt-[50px]">
        <NavFooter
          ratio="1:3"
          left={{ onClick: router.back }}
          right={{ onClick: handleGoToHome }}
        />
      </VStack>
    </PageLayout>
  );
}
