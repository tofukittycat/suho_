"use client";

import { Editor } from "react-konva-image-editor";

import VStack from "@/components/base/stack/VStack";
import useMultiStepForm from "@/components/hooks/useMultiStep";

import StepOne from "../_components/StepOne";
import StepTwo from "../_components/StepTwo";
import useDecorate from "../_hooks/useDecorate";

const props = {
  width: 430, // Number, 명시적으로 너비 설정
  height: 500, // Number, 명시적으로 높이 설정
  responsive: false, // Boolean, 반응형 설정
  aspectRatio: 1, // Number, 반응형 설정 시 너비와 높이 비율 설정
};

const StepKeys = {
  StepOne: "StepOne",
  StepTwo: "StepTwo",
};

export default function page() {
  const useDecorateControls = useDecorate();

  const { infoData } = useDecorateControls;

  const onSubmit = () => {
    switch (step.key) {
      case StepKeys.StepOne:
        next();
        break;
      case StepKeys.StepTwo:
        break;
      default:
        break;
    }
  };

  const { step, next } = useMultiStepForm([
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
    />,
  ]);

  return <VStack className="h-full w-full">{step}</VStack>;
}
