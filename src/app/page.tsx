"use client";

import { useRouter } from "next/navigation";

import InputField from "@/components/base/InputField";
import Label from "@/components/base/Label";
import HCStack from "@/components/base/stack/HCStack";
import HStack from "@/components/base/stack/HStack";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";
import { Button } from "@mui/material";

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <VStack>
        <InputField label={"이름"} />
        <InputField label={"이름"} />
      </VStack>

      <HStack>
        <InputField label={"이름"} />
        <InputField label={"이름"} />
      </HStack>

      <HCStack>
        <Label type="Title1" className="text-main-purple-suho">
          Title1
        </Label>
        <Label type="Title2">Title2</Label>
      </HCStack>

      <VCStack className="m-[50px]">
        <Label type="SubTitle1">SubTitle1</Label>
        <Label type="SubTitle2">SubTitle2</Label>
        <Label type="Body1">Body1</Label>
        <Label type="Body2">Body2</Label>
        <Label type="Caption">Caption</Label>
        <Label>Custom</Label>
      </VCStack>
      <VCStack className="m-[50px]">
        <Button
          variant="contained"
          onClick={() => {
            router.push("signin");
          }}
        >
          로그인으로 가기
        </Button>
      </VCStack>
    </main>
  );
}
