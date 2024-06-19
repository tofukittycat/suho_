"use client";

import VStack from "@/components/base/stack/VStack";
import useMultiStepForm from "@/components/hooks/useMultiStep";

import LuckyCategoryStep from "../../_components/steps/LuckyCategoryStep";
import LuckyDateStep from "../../_components/steps/LuckyDateStep";
import useLuckyTree from "../../_hooks/useLuckyTree";

const StepKeys = {
  LuckyDate: "LuckyDate-Step",
  LuckyCategory: "LuckyCategory-Step",
};

export default function page() {
  const luckyTreeHook = useLuckyTree();
  const { infoData, handleCreateLuckyTree } = luckyTreeHook;

  const onSubmit = () => {
    switch (step.key) {
      case StepKeys.LuckyDate:
        next();
        break;
      case StepKeys.LuckyCategory:
        handleCreateLuckyTree();
        break;
      default:
        break;
    }
  };

  const onClickBack = () => {
    switch (step.key) {
      case StepKeys.LuckyCategory:
        back();
        break;
      default:
        break;
    }
  };

  const { step, next, back } = useMultiStepForm([
    <LuckyDateStep
      key={StepKeys.LuckyDate}
      {...infoData}
      useluckyTree={luckyTreeHook}
      onClickSubmit={onSubmit}
    />,
    <LuckyCategoryStep
      key={StepKeys.LuckyCategory}
      {...infoData}
      useluckyTree={luckyTreeHook}
      onClickSubmit={onSubmit}
      onClickBack={onClickBack}
    />,
  ]);

  return <VStack className="h-full w-full">{step}</VStack>;
}
