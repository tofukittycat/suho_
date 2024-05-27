import VStack from "@/components/base/stack/VStack";

type StepTwoProps = {
  onClickSubmit: () => void;
};

export default function StepTwo({ onClickSubmit }: StepTwoProps) {
  return <VStack className="h-full w-full justify-between">Two</VStack>;
}
