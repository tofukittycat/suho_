"use client";

import React from "react";
import { useFormContext } from "react-hook-form";

import NavFooter from "@/components/NavFooter";
import SHLabel from "@/components/base/SHLabel";
import HStack from "@/components/base/stack/HStack";
import VStack from "@/components/base/stack/VStack";

import { CharmCreateSchemaType } from "../_utils/CharmCreateSchema";

interface PetProfileNameAdditionProps {
  goBack: VoidFunction;
  onNext: VoidFunction;
}

export default function CharmNameAddition(props: PetProfileNameAdditionProps) {
  const { onNext, goBack } = props;

  // const [senderName, setSenderName] = useState<string>("");
  const {
    register,
    formState: { errors },
  } = useFormContext<CharmCreateSchemaType>();

  return (
    <>
      <VStack className="mx-[20px]">
        {/* Header */}
        <HStack className="mt-[40px] h-[60px] items-end justify-between ">
          <VStack>
            <SHLabel className="whitespace-pre-line text-[24px] font-[800] text-white">
              {`보내는 분을\n적어주세요.`}
            </SHLabel>
          </VStack>
        </HStack>
      </VStack>
      {/* Tree BG */}
      <VStack wFull hFull className="mt-[10px]">
        {/* Tree BG_Top */}
        <HStack className="z-20 mx-[20px] mb-[-26px] flex-wrap justify-start pt-[40px]">
          <input
            {...register("sender")}
            type="text"
            className="rounded-md border border-gray-300 p-2 outline-none"
          />
          {errors.sender && <div className="text-red-500">{errors.sender.message}</div>}
        </HStack>
        {/* Tree BG_BOTTOM */}
        <VStack className="h-full w-full bg-[url('/imgs/home_tree_bottom.svg')] bg-cover bg-no-repeat">
          <VStack className="mx-[20px] mt-[80px]">
            <NavFooter
              ratio="1:3"
              left={{
                title: "이전",
                onClick: goBack,
              }}
              right={{
                title: "다음",
                onClick: onNext,
              }}
            />
          </VStack>
        </VStack>
      </VStack>
    </>
  );
}
