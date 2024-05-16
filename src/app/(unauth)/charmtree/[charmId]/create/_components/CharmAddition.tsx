"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import VStack from "@/components/base/stack/VStack";
import { Form } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

import useStickerDetailQuery from "../_hooks/useStickerDetailQuery";
import { CharmCreateSchemaType, charmCreateSchema } from "../_utils/CharmCreateSchema";
import CharmCheerAdditon from "./CharmCheerAddition";
import CharmNameAddition from "./CharmNameAddition";

const CharmImageAdditon = dynamic(() => import("./CharmImageAdditon"), {
  ssr: false,
});

export default function CharmAddition() {
  const navigate = useRouter();
  const [step, setStep] = useState<number>(0);

  const goBack = () => {
    if (step === 0) {
      navigate.back();
      return;
    }
    updateCurrentStep(step - 1);
  };

  const handleNext = () => {
    if (step > 1) {
      alert("단계 없음");
      return;
    }
    updateCurrentStep(step + 1);
  };
  const updateCurrentStep = (step: number) => setStep(step);

  const form = useForm<CharmCreateSchemaType>({
    resolver: zodResolver(charmCreateSchema),
    defaultValues: {
      sender: "",
      cheers: "",
    },
  });

  const onSubmit: SubmitHandler<CharmCreateSchemaType> = data => {
    console.log(data, "data");
  };

  const treeId = 10;
  const { charmImageURL, supplementTypes } = useStickerDetailQuery(treeId);
  console.log(charmImageURL, supplementTypes);

  return (
    <VStack className={cn("h-full w-full bg-black-purple-suho pt-[60px]")}>
      <button onClick={goBack} className="text-white">
        뒤로 가기
      </button>
      <button onClick={handleNext} className="text-white">
        다음
      </button>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {step === 0 && <CharmNameAddition form={form} />}
          {step === 1 && <CharmCheerAdditon form={form} charmImageURL={charmImageURL} />}
          {step === 2 && (
            <CharmImageAdditon
              form={form}
              charmImageURL={charmImageURL}
              supplementTypes={supplementTypes}
            />
          )}
          <button type="submit" className="text-white" onSubmit={form.handleSubmit(onSubmit)}>
            제출
          </button>
        </form>
      </Form>
    </VStack>
  );
}
