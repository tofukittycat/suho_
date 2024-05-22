import CTAButton from "@/components/CTAButton";
import SHLabel from "@/components/base/SHLabel";
import TreeBGView from "@/components/base/bg/TreeBGView";
import VCStack from "@/components/base/stack/VCStack";

type StepThreeProps = {
  onClickSubmit: () => void;
};

export default function StepThree({ onClickSubmit }: StepThreeProps) {
  return (
    <>3</>
    // <TreeBGView
    //   hillLayout={
    //     <VCStack wFull>
    //       <SHLabel className="mt-[30px] whitespace-pre-line text-center text-[18px] font-[700] text-[#303538]">
    //         {"부적은 무섭고 어렵다고 생각하나요?\n"}
    //         <span className="text-[18px] font-[700] text-main-purple-suho">
    //           {"바라는 마음을 담아 만들면 부적이에요."}
    //         </span>
    //       </SHLabel>
    //       <div className="mt-[35px] w-full px-[20px]">
    //         <CTAButton onClick={onClickSubmit}>행운 나무 만들러 가기</CTAButton>
    //       </div>
    //     </VCStack>
    //   }
    // />
  );
}
