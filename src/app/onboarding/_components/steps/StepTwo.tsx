import Image from "next/image";

import Lottie from "react-lottie";

import CTAButton from "@/components/CTAButton";
import SHLabel from "@/components/base/SHLabel";
import TreeBGView from "@/components/base/bg/TreeBGView";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";

import * as animationData from "../../../../../public/lotties/onboarding_card.json";

type StepTwoProps = {
  onClickSubmit: () => void;
};

export default function StepTwo({ onClickSubmit }: StepTwoProps) {
  return (
    <VStack className="h-full w-full justify-between bg-red-300">
      <VStack className="mt-[36px] w-full items-center">
        <Image src={"/imgs/small_logo_blue.svg"} alt="logo" width={74} height={14} />
        <div className="mt-[-36px]">
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

        <div>
          <SHLabel className="whitespace-pre-line text-center text-[18px] font-[700] text-[#6059AE]">
            {`사주에서 나에게 부족한 기운을 알아보고\n행운 부적으로 보완해보세요`}
          </SHLabel>
        </div>
      </VStack>

      <CTAButton onClick={onClickSubmit} className="mb-[160px]">
        다음
      </CTAButton>
      {/* <div className="h-full w-full bg-slate-500 px-[20px]"></div> */}
    </VStack>
    // <>
    //   <TreeBGView
    //     hiddenTree
    //     treeLayout={
    //       <VCStack>
    //         <VCStack className="h-[300px] w-[60%] items-center bg-gray-400">이미지</VCStack>
    //       </VCStack>
    //     }
    //     hillLayout={
    //       <VCStack wFull>
    //         <SHLabel className="mt-[30px] whitespace-pre-line text-center text-[18px] font-[700] text-[#303538]">
    //           {"부적은 무섭고 어렵다고 생각하나요?\n"}
    //           <span className="text-[18px] font-[700] text-main-purple-suho">
    //             {"바라는 마음을 담아 만들면 부적이에요."}
    //           </span>
    //         </SHLabel>
    //         <div className="mt-[35px] w-full px-[20px]">
    //           <CTAButton onClick={onClickSubmit}>다음</CTAButton>
    //         </div>
    //       </VCStack>
    //     }
    //   />
    // </>
  );
}
