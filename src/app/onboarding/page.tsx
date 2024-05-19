"use client";

import VStack from "@/components/base/stack/VStack";
import useMultiStepForm from "@/components/hooks/useMultiStep";

import StepOne from "./_components/steps/StepOne";
import StepThree from "./_components/steps/StepThree";
import StepTwo from "./_components/steps/StepTwo";
import useOnboarding from "./_hooks/useOnboarding";

const StepKeys = {
  StepOne: "StepOne",
  StepTwo: "StepTwo",
  StepThree: "StepThree",
};

export default function OnboardingPage() {
  const { router } = useOnboarding();

  const onSubmit = () => {
    switch (step.key) {
      case StepKeys.StepOne:
      case StepKeys.StepTwo:
        next();
        break;
      case StepKeys.StepThree:
        router.push("/home");
        break;
      default:
        break;
    }
  };

  const { step, next } = useMultiStepForm([
    <StepOne key={StepKeys.StepOne} onClickSubmit={onSubmit} />,
    <StepTwo key={StepKeys.StepTwo} onClickSubmit={onSubmit} />,
    <StepThree key={StepKeys.StepThree} onClickSubmit={onSubmit} />,
  ]);

  return <VStack className="relative h-full w-full">{step}</VStack>;
}
