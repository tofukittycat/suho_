import { useRouter } from "next/navigation";

import BottomSheet from "@/components/BottomSheet";
import SHImage from "@/components/base/SHImage";
import SHLabel from "@/components/base/SHLabel";
import HStack from "@/components/base/stack/HStack";
import VCStack from "@/components/base/stack/VCStack";
import VStack from "@/components/base/stack/VStack";
import useAuth from "@/components/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { deleteWithdrawal } from "@/services/user";

type WithdrawalBottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function WithdrawalBottomSheet({ isOpen, onClose }: WithdrawalBottomSheetProps) {
  const router = useRouter();
  const { clearToken } = useAuth();

  const handleWithdrawal = () => {
    deleteWithdrawal().then(() => {
      clearToken();
      router.replace("/signin");
    });
  };

  return (
    <BottomSheet isOpen={isOpen} onClose={onClose}>
      <VStack className="pb-[32px]">
        <HStack className="mr-[16px] mt-[16px] justify-end">
          {/* <CloseIcon className="size-[24px] text-[#ADABC6]" onClick={close} /> */}
        </HStack>
        <VCStack>
          <SHImage src="/imgs/icons/ic_sheet_tree.svg" className="h-[100px] w-[100px]" />
          <SHLabel className="mt-[16px] whitespace-pre-wrap text-center font-[600] leading-4 text-[#0B082B]">
            {`행운 나무를 정말 삭제하시겠어요?\n`}
            <span className="text-[#EB5847]">기존의 행운나무와 부적이 모두 삭제돼요.</span>
          </SHLabel>
        </VCStack>

        <HStack className="mt-[25px] h-[49px] w-full items-center justify-between gap-[10px] px-[15px]">
          <Button
            onClick={onClose}
            className={`h-full w-full rounded-[15px] bg-[#E4DCFF] text-[16px] font-[600] text-main-purple-suho hover:bg-[#d9d0f4]`}
          >
            이전으로
          </Button>
          <Button
            onClick={handleWithdrawal}
            className="h-full w-full rounded-[15px] bg-[#EB5847] text-[16px] font-[600] text-white hover:bg-[#da5445]"
          >
            삭제
          </Button>
        </HStack>
      </VStack>
    </BottomSheet>
  );
}
