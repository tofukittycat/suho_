import Lottie from "react-lottie";

import * as animationData from "../../../public/spinner.json";
import VCStack from "./stack/VCStack";

export function SHGlobalSpinner() {
  return (
    <VCStack className="h-full w-full items-center justify-center">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData,
        }}
        height={76}
        width={76}
      />
    </VCStack>
  );
}

export function SHSpinner() {
  return (
    <VCStack className="items-center justify-center">
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData,
        }}
        height={76}
        width={76}
      />
    </VCStack>
  );
}
