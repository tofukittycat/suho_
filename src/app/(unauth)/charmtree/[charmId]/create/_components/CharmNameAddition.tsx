import React from "react";

import SHLabel from "@/components/base/SHLabel";
import VStack from "@/components/base/stack/VStack";
import { FormControl, FormField, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// interface CharmNameAdditionProps {
//   onNext: VoidFunction;
// }

export default function CharmNameAddition(props) {
  const { form } = props;

  return (
    <VStack>
      <SHLabel type="Title2" className="text-purple-brigh">
        보내시는 분을
      </SHLabel>
      <SHLabel type="Title2" className="text-white">
        적어주세요.
      </SHLabel>
      <VStack className="mt-[50px] gap-[50px]">
        <FormField
          control={form.control}
          name="sender"
          render={({ field }) => (
            <>
              <FormControl>
                <Input className="" {...field} />
              </FormControl>
              <FormMessage />
            </>
          )}
        />
        <div className="flex justify-between"></div>
      </VStack>
    </VStack>
  );
}
