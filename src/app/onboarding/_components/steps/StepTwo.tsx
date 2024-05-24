import Image from "next/image";

import Lottie from "react-lottie";

import CTAButton from "@/components/CTAButton";
import CTAContainer from "@/components/CTAContainer";
import SHLabel from "@/components/base/SHLabel";
import VStack from "@/components/base/stack/VStack";

// import * as animationData from "../../../../../public/lotties/onboarding_card.json";
import * as animationData from "../../../../../public/lotties/test_2.json";

type StepTwoProps = {
  onClickSubmit: () => void;
};

export default function StepTwo({ onClickSubmit }: StepTwoProps) {
  return (
    <VStack className="h-full w-full justify-between">
      <VStack className="mt-[36px] w-full items-center">
        <Image src={"/imgs/small_logo_blue.svg"} alt="logo" width={74} height={14} />
        <div className="px-[50px]">
          <Lottie
            options={{
              loop: true,
              autoplay: true,
              animationData: animationData,
            }}
            height={"100%"}
            width={"100%"}
          />
        </div>
      </VStack>
      <CTAContainer className="gap-[46px]">
        <SHLabel className="whitespace-pre-line text-center text-[18px] font-[700] text-[#6059AE]">
          {`사주에서 나에게 부족한 기운을 알아보고\n행운 부적으로 보완해보세요`}
        </SHLabel>
        <CTAButton onClick={onClickSubmit}>다음</CTAButton>
      </CTAContainer>
    </VStack>
  );
}
