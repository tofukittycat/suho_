"use client";

import VStack from "@/components/base/stack/VStack";
import useMultiStepForm from "@/components/hooks/useMultiStep";
import { removeHyphens } from "@/utils/utils";

import InfoDateStep from "../../_components/steps/InfoDateStep";
import InfoNameStep from "../../_components/steps/InfoNameStep";
import InfoPhoneNumberStep from "../../_components/steps/InfoPhoneNumberStep";
import useSignIn from "../../_hooks/useSignIn";

const StepKeys = {
  InfoPhoneNumber: "InfoPhoneNumber-Step",
  InfoDate: "InfoDate-Step",
  InfoName: "InfoName-Step",
};

export default function page() {
  const useSignin = useSignIn();
  const { infoData, handleAddUserInfo } = useSignin;

  const onSubmit = () => {
    switch (step.key) {
      case StepKeys.InfoPhoneNumber:
        next();
        break;
      case StepKeys.InfoDate:
        next();
        break;
      case StepKeys.InfoName:
        handleAddUserInfo({
          birth: infoData.birth,
          birthType: infoData.birthType === 1 ? 1 : 0, // 1은 양력, 나머지는 0 으로
          birthTime: infoData.birthTime,
          name: infoData.name,
          phoneNumber: removeHyphens(infoData.phoneNumber ?? ""),
        });

        break;
      default:
        break;
    }
  };

  const onClickBack = () => {
    switch (step.key) {
      case StepKeys.InfoDate:
      case StepKeys.InfoName:
        back();
        break;
      default:
        break;
    }
  };

  const { step, next, back } = useMultiStepForm([
    <InfoPhoneNumberStep
      key={StepKeys.InfoPhoneNumber}
      {...infoData}
      useSignin={useSignin}
      onClickSubmit={onSubmit}
    />,
    <InfoDateStep
      key={StepKeys.InfoDate}
      {...infoData}
      useSignin={useSignin}
      onClickSubmit={onSubmit}
      onClickBack={onClickBack}
    />,
    <InfoNameStep
      key={StepKeys.InfoName}
      {...infoData}
      useSignin={useSignin}
      onClickSubmit={onSubmit}
      onClickBack={onClickBack}
    />,
  ]);

  return <VStack className="h-full w-full">{step}</VStack>;
}
