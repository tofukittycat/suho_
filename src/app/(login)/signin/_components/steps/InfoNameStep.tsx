import { ChangeEvent, useMemo } from "react";

import CTAContainer from "@/components/CTAContainer";
import NavFooter from "@/components/NavFooter";
import SHInputField from "@/components/base/SHInputField";
import SHLabel from "@/components/base/SHLabel";
import VStack from "@/components/base/stack/VStack";
import { isEmpty } from "lodash";

import { UseSignInType } from "../../_hooks/useSignIn";

type InfoNameStepProps = {
  useSignin: UseSignInType;
  onClickBack: () => void;
  onClickSubmit: () => void;
};

export default function InfoNameStep({ useSignin, onClickBack, onClickSubmit }: InfoNameStepProps) {
  const { infoData, updateFields } = useSignin;

  const disabledSubmitButton = useMemo(() => {
    return isEmpty(infoData.name);
  }, [infoData]);

  const handleChangeInputName = (event: ChangeEvent<HTMLInputElement>) => {
    updateFields({ name: event.target.value });
  };

  return (
    <VStack className="h-full px-[20px]">
      <VStack className="mt-[60px]">
        <SHLabel type="SubTitle1" className="text-white">
          이름을 입력해주세요.
        </SHLabel>
        <VStack className="mt-[50px] gap-[50px]">
          <SHInputField
            label="이름"
            defaultValue={infoData.name}
            type="text"
            fontColor="white"
            onChange={handleChangeInputName}
          />
        </VStack>
      </VStack>
      <CTAContainer className="px-0">
        <NavFooter
          ratio="1:3"
          left={{ onClick: onClickBack }}
          right={{ disabled: disabledSubmitButton, onClick: onClickSubmit }}
        />
      </CTAContainer>
    </VStack>
  );
}
