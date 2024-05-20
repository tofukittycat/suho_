"use client";

import { useMemo, useState } from "react";
import { Children, PropsWithChildren, ReactElement, isValidElement, useEffect } from "react";

type NonEmptyArray<T> = readonly [T, ...T[]];

export interface FunnelProps<Steps extends NonEmptyArray<string>> {
  steps: Steps;
  step: Steps[number];
  children: Array<ReactElement<StepProps<Steps>>> | ReactElement<StepProps<Steps>>;
}

export interface StepProps<Steps extends NonEmptyArray<string>> extends PropsWithChildren {
  name: Steps[number];
  onNext?: VoidFunction;
}

export const Step = <T extends NonEmptyArray<string>>({ onNext, children }: StepProps<T>) => {
  useEffect(() => {
    onNext?.();
  }, [onNext]);

  return children;
};

export const Funnel = <Steps extends NonEmptyArray<string>>(props: FunnelProps<Steps>) => {
  const { steps, step, children } = props;
  const validChildren = Children.toArray(children)
    .filter(isValidElement<StepProps<Steps>>)
    .filter(({ props }) => steps.includes(props.name));

  const targetStep = validChildren.find(child => child.props.name === step);

  return targetStep;
};

export const useFunnel = <Steps extends NonEmptyArray<string>>(
  steps: Steps,
  defaultStep: Steps[number],
) => {
  const [step, setStep] = useState<Steps[number]>(defaultStep);

  const FunnelComponent = useMemo(
    () =>
      Object.assign(
        (props: Omit<FunnelProps<Steps>, "step" | "steps">) => (
          <Funnel<Steps> step={step} steps={steps} {...props} />
        ),
        { Step },
      ),
    [step],
  );

  return { Funnel: FunnelComponent, step, setStep };
};
