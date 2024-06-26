import { ChangeEvent, useMemo } from "react";

import CTABottomPadding from "@/components/CTABottomPadding";
import NavFooter from "@/components/NavFooter";
import SHDateInputField from "@/components/base/SHDateInputField";
import SHInputSelect from "@/components/base/SHInputSelect";
import SHLabel from "@/components/base/SHLabel";
import SHRadioGroup from "@/components/base/SHRadio";
import VStack from "@/components/base/stack/VStack";
import { isEmpty } from "lodash";

import { UseSignInType } from "../../_hooks/useSignIn";

export const 십이간지시간Items = [
  {
    value: "23:30~01:30",
    label: "子時(자시) - 23:30 ~ 01:30",
  },
  {
    value: "01:30~03:30",
    label: "丑時(축시) - 01:30 ~ 03:30",
  },
  {
    value: "03:30~05:30",
    label: "寅時(인시) - 03:30 ~ 05:30",
  },
  {
    value: "05:30~07:30",
    label: "卯時(묘시) - 05:30 ~ 07:30",
  },
  {
    value: "07:30~09:30",
    label: "辰時(진시) - 07:30 ~ 09:30",
  },
  {
    value: "09:30~11:30",
    label: "巳時(사시) - 09:30 ~ 11:30",
  },
  {
    value: "11:30~13:30",
    label: "午時(오시) - 11:30 ~ 13:30",
  },
  {
    value: "13:30~15:30",
    label: "未時(미시) - 13:30 ~ 15:30",
  },
  {
    value: "15:30~17:30",
    label: "申時(신시) - 15:30 ~ 17:30",
  },
  {
    value: "17:30~19:30",
    label: "酉時(유시) - 17:30 ~ 19:30",
  },
  {
    value: "19:30~21:30",
    label: "戌時(술시) - 19:30 ~ 21:30",
  },
  {
    value: "21:30~23:30",
    label: "亥時(해시) - 21:30 ~ 23:30",
  },
];

type InfoDateStepProps = {
  useSignin: UseSignInType;
  onClickSubmit: () => void;
};

export default function InfoDateStep({ useSignin, onClickSubmit }: InfoDateStepProps) {
  const { router, infoData, updateFields } = useSignin;

  const disabledSubmitButton = useMemo(() => {
    return isEmpty(infoData.birth) && isEmpty(infoData.birthType);
  }, [infoData]);

  const handleChangeInputBirth = (event: ChangeEvent<HTMLInputElement>) => {
    updateFields({ birth: event.target.value });
  };

  const handleChangeBirthType = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFields({ birthType: Number(event.target.value) });
  };

  const handleChangeBirthTime = (event: ChangeEvent<HTMLInputElement>) => {
    updateFields({ birthTime: event.target.value });
  };

  return (
    <VStack className="z-10 px-[20px] pt-[60px]">
      <VStack>
        <SHLabel type="SubTitle1" className="text-white">
          생년월일을 알려주세요.
        </SHLabel>
        <SHLabel type="Body2" className="mt-[10px] text-[#D1D5D9]">
          사주를 보기 위해서 생년월일이 필요해요.
        </SHLabel>
        <VStack className="mt-[50px] gap-[50px]">
          <VStack>
            <SHDateInputField
              label="생년월일"
              fontColor="white"
              className="text-white"
              onChange={handleChangeInputBirth}
            />
            <SHRadioGroup
              isRow
              items={[
                { label: "양력", value: "0" },
                { label: "음력", value: "1" },
                { label: "음력 윤달", value: "2" },
              ]}
              onChange={handleChangeBirthType}
            />
          </VStack>
          <VStack>
            <SHInputSelect
              label="태어난 시간"
              fontColor="white"
              items={십이간지시간Items}
              onChange={handleChangeBirthTime}
            />
            <SHLabel className="mt-[10px] text-[13px] font-[500] text-[#B8BFC4]">
              태어난 시간을 몰라도 괜찮아요
            </SHLabel>
          </VStack>
        </VStack>
      </VStack>
      <CTABottomPadding>
        <NavFooter
          ratio="1:3"
          left={{ onClick: router.back }}
          right={{ disabled: disabledSubmitButton, onClick: onClickSubmit }}
        />
      </CTABottomPadding>
    </VStack>
  );
}
