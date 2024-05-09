"use client";

import NavFooter from "@/components/NavFooter";
import SHDateInputField from "@/components/base/SHDateInputField";
import SHInputSelect from "@/components/base/SHInputSelect";
import SHLabel from "@/components/base/SHLabel";
import SHRadioGroup from "@/components/base/SHRadio";
import VStack from "@/components/base/stack/VStack";

import PageLayout from "../../../@components/PageLayout";
import useSignIn from "../../../@hooks/useSignIn";

const 십이간지시간Items = [
  {
    value: "23:30 ~ 01: 30",
    label: "子時(자시) - 23:30 ~ 01: 30",
  },
  {
    value: "01:30 ~ 03: 30",
    label: "丑時(축시) - 01:30 ~ 03: 30",
  },
  {
    value: "03:30 ~ 05: 30",
    label: "寅時(인시) - 03:30 ~ 05: 30",
  },
  {
    value: "05:30 ~ 07: 30",
    label: "卯時(묘시) - 05:30 ~ 07: 30",
  },
  {
    value: "07:30 ~ 09: 30",
    label: "辰時(진시) - 07:30 ~ 09: 30",
  },
  {
    value: "09:30 ~ 11: 30",
    label: "巳時(사시) - 09:30 ~ 11: 30",
  },
  {
    value: "11:30 ~ 13: 30",
    label: "午時(오시) - 11:30 ~ 13: 30",
  },
  {
    value: "13:30 ~ 15: 30",
    label: "未時(미시) - 13:30 ~ 15: 30",
  },
  {
    value: "15:30 ~ 17: 30",
    label: "申時(신시) - 15:30 ~ 17: 30",
  },
  {
    value: "17:30 ~ 19: 30",
    label: "酉時(유시) - 17:30 ~ 19: 30",
  },
  {
    value: "19:30 ~ 21: 30",
    label: "戌時(술시) - 19:30 ~ 21: 30",
  },
  {
    value: "21:30 ~ 23: 30",
    label: "亥時(해시) - 21:30 ~ 23: 30",
  },
];

export default function page() {
  const { router, handleGoToName } = useSignIn();

  return (
    <PageLayout>
      <VStack>
        <SHLabel type="SubTitle1" className="text-white">
          생년월일을 알려주세요.
        </SHLabel>
        <SHLabel type="Body2" className="mt-[10px] text-[#D1D5D9]">
          사주를 보기 위해서 생년월일이 필요해요.
        </SHLabel>
        <VStack className="mt-[50px] gap-[50px]">
          {/* <Controller
            name="email"
            defaultValue={""}
            control={control}
            render={({ field }) => <InputField {...field} label="이메일 주소" type="email" />}
          /> */}
          <VStack>
            <SHDateInputField label="생년월일" fontColor="white" className="text-white" />
            <SHRadioGroup
              isRow
              items={[
                { label: "양력", value: "solar" },
                { label: "음력", value: "lunar" },
                { label: "음력 윤달", value: "lunar-leap" },
              ]}
            />
          </VStack>
          <SHInputSelect label="태어난 시간" fontColor="white" items={십이간지시간Items} />
          {/* <Controller
            name="password"
            defaultValue={undefined}
            control={control}
            render={({ field }) => (
              <InputField {...field} type="password" autoComplete="new-password" label="비밀번호" />
            )}
          /> */}
        </VStack>
      </VStack>
      <VStack className="mt-[50px]">
        <NavFooter
          ratio="1:3"
          left={{ onClick: router.back }}
          right={{ onClick: handleGoToName }}
        />
      </VStack>
    </PageLayout>
  );
}
