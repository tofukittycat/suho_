"use client";

import { useRouter } from "next/navigation";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import VStack from "@/components/base/stack/VStack";
import { zodResolver } from "@hookform/resolvers/zod";

import CharmCheerAddition from "./_components/CharmCheerAddition";
import CharmImageAddition from "./_components/CharmImageAdditon";
import CharmNameAddition from "./_components/CharmNameAddition";
import { useFunnel } from "./_hooks/useFunnel";
import useStickerDetailQuery from "./_hooks/useStickerDetailQuery";
import { CharmCreateSchemaType, charmCreateSchema } from "./_utils/CharmCreateSchema";

export const ADDITION_STEP = ["NAME", "CHEER", "CHARM"] as const;

export default function page() {
  const treeId = 10;
  const { charmImageURL, supplementTypes } = useStickerDetailQuery(treeId);

  const form = useForm<CharmCreateSchemaType>({
    resolver: zodResolver(charmCreateSchema),
    defaultValues: {
      sender: "",
      cheers: "",
    },
    mode: "all",
  });

  const navigate = useRouter();

  const goBack = () => navigate.back;

  const goBackSafely = () => {
    confirm("현재까지 입력한 정보가 사라집니다. 뒤로 가시겠습니까?") && goBack();
  };

  const { step, setStep } = useFunnel(ADDITION_STEP, ADDITION_STEP[0]);

  return (
    <main className="h-full w-full bg-[url('/imgs/home_bg.svg')] bg-cover bg-no-repeat">
      <VStack className="h-full w-full bg-[url('/imgs/home_bg_universe.svg')] bg-cover bg-no-repeat">
        <FormProvider {...form}>
          {step === "NAME" && (
            <CharmNameAddition goBack={goBackSafely} onNext={() => setStep("CHEER")} />
          )}
          {step === "CHEER" && (
            <CharmCheerAddition
              goBack={() => setStep("NAME")}
              onNext={() => setStep("CHARM")}
              charmImageURL={charmImageURL}
            />
          )}
          {step === "CHARM" && (
            <CharmImageAddition
              goBack={() => setStep("CHEER")}
              onNext={() => setStep("CHARM")}
              charmImageURL={charmImageURL}
              supplementTypes={supplementTypes}
            />
          )}
        </FormProvider>
      </VStack>
    </main>
  );
}
