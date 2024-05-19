import CTAButton from "@/components/CTAButton";
import SHLabel from "@/components/base/SHLabel";
import TreeBGView from "@/components/base/bg/TreeBGView";
import VCStack from "@/components/base/stack/VCStack";

type StepOneProps = {
  onClickSubmit: () => void;
};

export default function StepOne({ onClickSubmit }: StepOneProps) {
  return (
    <TreeBGView
      hillLayout={
        <VCStack wFull>
          <SHLabel className="mt-[30px] whitespace-pre-line text-center text-[18px] font-[700] text-[#303538]">
            부적을 써줘
          </SHLabel>

          <div className="mt-[35px] w-full px-[20px]">
            <CTAButton onClick={onClickSubmit}>다음</CTAButton>
          </div>
        </VCStack>
      }
    />
  );
}
