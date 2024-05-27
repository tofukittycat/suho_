import { ChangeEvent } from "react";

import CTAContainer from "@/components/CTAContainer";
import NavFooter from "@/components/NavFooter";
import SHInputField from "@/components/base/SHInputField";
import SHLabel from "@/components/base/SHLabel";
import VStack from "@/components/base/stack/VStack";

import { UseDecorateType } from "../_hooks/useDecorate";

type StepOneProps = {
  useDecorateControls: UseDecorateType;
  onClickSubmit: () => void;
};

const maxLength = 5;

export default function StepOne({ useDecorateControls, onClickSubmit }: StepOneProps) {
  const { router, infoData, updateFields } = useDecorateControls;

  const handleChangeInputSender = (event: ChangeEvent<HTMLInputElement>) => {
    if (maxLength) {
      const sender = infoData.sender ?? "";
      if (sender.length > maxLength) {
        event.target.value = sender.substring(0, maxLength);
        return;
      }
    }

    updateFields({ sender: event.target.value });
  };

  return (
    <VStack className="h-full px-[20px]">
      <VStack className="mt-[60px]">
        <SHLabel type="SubTitle1" className="whitespace-pre-wrap text-white">
          <span className="text-[#A48AFF]">보내시는 분을</span> {`\n적어주세요.`}
        </SHLabel>
        <VStack className="mt-[50px] gap-[50px]">
          <SHInputField
            label="FROM"
            defaultValue={infoData.sender}
            type="text"
            fontColor="white"
            onChange={handleChangeInputSender}
          />
        </VStack>
        <SHLabel className="mt-[12px] text-[13px] font-[500] text-[#B8BFC4]">
          5자 이내로 적어주세요.
        </SHLabel>
      </VStack>
      <CTAContainer className="px-0">
        <NavFooter ratio="1:3" left={{ onClick: router.back }} right={{ onClick: onClickSubmit }} />
      </CTAContainer>
    </VStack>
  );
}
