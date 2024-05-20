import CTAButton from "@/components/CTAButton";
import SHLabel from "@/components/base/SHLabel";
import TreeBGView from "@/components/base/bg/TreeBGView";
import VCStack from "@/components/base/stack/VCStack";

type StepTwoProps = {
  onClickSubmit: () => void;
};

export default function StepTwo({ onClickSubmit }: StepTwoProps) {
  return (
    <>
      <TreeBGView
        hiddenTree
        treeLayout={
          <VCStack>
            <VCStack className="h-[300px] w-[60%] items-center bg-gray-400">이미지</VCStack>
          </VCStack>
        }
        hillLayout={
          <VCStack wFull>
            <SHLabel className="mt-[30px] whitespace-pre-line text-center text-[18px] font-[700] text-[#303538]">
              {"부적은 무섭고 어렵다고 생각하나요?\n"}
              <span className="text-[18px] font-[700] text-main-purple-suho">
                {"바라는 마음을 담아 만들면 부적이에요."}
              </span>
            </SHLabel>
            <div className="mt-[35px] w-full px-[20px]">
              <CTAButton onClick={onClickSubmit}>다음</CTAButton>
            </div>
          </VCStack>
        }
      />
    </>
  );
}
