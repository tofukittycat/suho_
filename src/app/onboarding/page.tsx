"use client";

import VStack from "@/components/base/stack/VStack";
import useAuth from "@/components/hooks/useAuth";
import useMultiStepForm from "@/components/hooks/useMultiStep";

import StepOne from "./_components/steps/StepOne";
import StepTwo from "./_components/steps/StepTwo";
import useOnboarding from "./_hooks/useOnboarding";

const StepKeys = {
  StepOne: "StepOne",
  StepTwo: "StepTwo",
};

export default function OnboardingPage() {
  const { router } = useOnboarding();
  const { isEmptyToken } = useAuth();

  const onSubmit = () => {
    switch (step.key) {
      case StepKeys.StepOne:
        goTo(1);
        break;
      case StepKeys.StepTwo:
        isEmptyToken ? router.push("/signin") : router.push("/home");
        break;
      default:
        break;
    }
  };

  const { step, goTo } = useMultiStepForm([
    <StepOne key={StepKeys.StepOne} onClickSubmit={onSubmit} />,
    <StepTwo key={StepKeys.StepTwo} onClickSubmit={onSubmit} />,
  ]);

  return <VStack className="h-full w-full">{step}</VStack>;
}
