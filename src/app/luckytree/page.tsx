"use client";

import VStack from "@/components/base/stack/VStack";
import useMultiStepForm from "@/components/hooks/useMultiStep";

import LuckyCategoryStep from "./_components/steps/LuckyCategoryStep";
import LuckyDateStep from "./_components/steps/LuckyDateStep";
import LuckyResultPendingStep from "./_components/steps/LuckyResultPendingStep";
import useLuckyTree from "./_hooks/useLuckyTree";

// type pageProps = {};

const StepKeys = {
  LuckyDate: "LuckyDate-Step",
  LuckyCategory: "LuckyCategory-Step",
  LuckyResultPending: "LuckyResultPending-Step",
};

export default function page() {
  const { router } = useLuckyTree();

  const onSubmit = () => {
    switch (step.key) {
      case StepKeys.LuckyDate:
      case StepKeys.LuckyCategory:
        next();
        break;
      case StepKeys.LuckyResultPending:
        router.push("luckytree/result");
        break;
      default:
        break;
    }
  };

  const { isFirstStep, currentStepIndex, steps, step, back, next } = useMultiStepForm([
    <LuckyDateStep key={StepKeys.LuckyDate} onClickSubmit={onSubmit} />,
    <LuckyCategoryStep key={StepKeys.LuckyCategory} onClickSubmit={onSubmit} />,
    <LuckyResultPendingStep key={StepKeys.LuckyResultPending} onSuccess={onSubmit} />,
  ]);

  isFirstStep;
  currentStepIndex;
  steps;
  back;

  return (
    <main className="h-full w-full bg-[url('/imgs/home_bg.svg')] bg-cover bg-no-repeat">
      <VStack className="h-full w-full bg-[url('/imgs/home_bg_universe.svg')] bg-cover bg-no-repeat">
        {step}
      </VStack>
    </main>
  );
}
//
