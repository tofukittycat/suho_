import { useMemo } from "react";
import Lottie from "react-lottie";

import * as elemental_earth from "../../public/lotties/elemental_earth.json";
import * as elemental_fire from "../../public/lotties/elemental_fire.json";
import * as elemental_gold from "../../public/lotties/elemental_gold.json";
import * as elemental_tree from "../../public/lotties/elemental_tree.json";
import * as elemental_water from "../../public/lotties/elemental_water.json";

type ElementalLottieProps = {
  luckySpirit: string;
};

export default function ElementalLottie({ luckySpirit }: ElementalLottieProps) {
  const lottieFile = useMemo(() => {
    switch (luckySpirit) {
      case "물":
        return elemental_water;
      case "불":
        return elemental_fire;
      case "나무":
        return elemental_tree;
      case "땅":
        return elemental_earth;
      case "쇠":
        return elemental_gold;
      default:
        return elemental_gold;
    }
  }, [luckySpirit]);

  return (
    <Lottie
      options={{
        loop: true,
        autoplay: true,
        animationData: lottieFile,
      }}
      height={120}
      width={120}
    />
  );
}
