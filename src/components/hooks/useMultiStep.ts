"use client";

import { ReactElement, useState } from "react";

export default function useMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  const isFirstStep = currentStepIndex === 0;

  function next() {
    setCurrentStepIndex(prevIndex => {
      if (prevIndex >= steps.length - 1) {
        return prevIndex;
      }

      return prevIndex + 1;
    });
  }

  function back() {
    setCurrentStepIndex(prevIndex => {
      if (prevIndex <= 0) {
        return prevIndex;
      }

      return prevIndex - 1;
    });
  }

  function goTo(index: number) {
    setCurrentStepIndex(index);
  }

  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep,
    goTo,
    next,
    back,
  };
}
