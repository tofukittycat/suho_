"use client";

import VStack from "@/components/base/stack/VStack";
import useMultiStepForm from "@/components/hooks/useMultiStep";

import StepOne from "../_components/StepOne";
import StepTwo from "../_components/StepTwo";
import useDecorate from "../_hooks/useDecorate";

const StepKeys = {
  StepOne: "StepOne",
  StepTwo: "StepTwo",
};

export default function page() {
  const useDecorateControls = useDecorate();

  const { infoData, createWriteCharm } = useDecorateControls;

  const onSubmit = () => {
    switch (step.key) {
      case StepKeys.StepOne:
        next();
        break;
      case StepKeys.StepTwo:
        createWriteCharm();
        break;
      default:
        break;
    }
  };

  const onClickBack = () => {
    switch (step.key) {
      case StepKeys.StepTwo:
        back();
        break;
      default:
        break;
    }
  };

  const { step, next, back } = useMultiStepForm([
    <StepOne
      key={StepKeys.StepOne}
      {...infoData}
      useDecorateControls={useDecorateControls}
      onClickSubmit={onSubmit}
    />,
    <StepTwo
      key={StepKeys.StepTwo}
      {...infoData}
      useDecorateControls={useDecorateControls}
      onClickSubmit={onSubmit}
      onClickBack={onClickBack}
    />,
  ]);

  return <VStack className="h-full w-full">{step}</VStack>;
}
