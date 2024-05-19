"use client";

import VStack from "@/components/base/stack/VStack";
import useMultiStepForm from "@/components/hooks/useMultiStep";

import InfoDateStep from "../../_components/steps/InfoDateStep";
import InfoNameStep from "../../_components/steps/InfoNameStep";
import useSignIn from "../../_hooks/useSignIn";

const StepKeys = {
  InfoDate: "InfoDate-Step",
  InfoName: "InfoName-Step",
};

export default function page() {
  const useSignin = useSignIn();
  const { infoData, handleAddUserInfo } = useSignin;

  const onSubmit = () => {
    switch (step.key) {
      case StepKeys.InfoDate:
        next();
        break;
      case StepKeys.InfoName:
        handleAddUserInfo({
          birth: infoData.birth,
          birthType: infoData.birthType ?? 0,
          birthTime: infoData.birthTime,
          name: infoData.name,
        });
        break;
      default:
        break;
    }
  };

  const onClickBack = () => {
    switch (step.key) {
      case StepKeys.InfoName:
        back();
        break;
      default:
        break;
    }
  };

  const { step, next, back } = useMultiStepForm([
    <InfoDateStep
      key={StepKeys.InfoDate}
      {...infoData}
      useSignin={useSignin}
      onClickSubmit={onSubmit}
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
