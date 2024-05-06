import React from "react";

import NavHeader from "@/components/NavHeader";
import Label from "@/components/base/Label";
import VStack from "@/components/base/stack/VStack";

export default function page() {
  return (
    <VStack>
      <NavHeader />
      <VStack>
        <Label type="">123</Label>
      </VStack>
    </VStack>
  );
}
