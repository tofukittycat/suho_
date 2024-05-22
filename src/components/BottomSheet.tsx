import { ReactNode } from "react";

import { Backdrop } from "@mui/material";

import VStack from "./base/stack/VStack";

type BottomSheetProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function BottomSheet({ isOpen, onClose, children }: BottomSheetProps) {
  return (
    <Backdrop
      open={isOpen}
      onClick={onClose}
      className="mx-auto flex h-full w-full items-center justify-center rounded-none border-none bg-transparent md:w-[430px]"
    >
      <VStack
        wFull
        hFull
        sx={{
          justifyContent: "flex-end",
          padding: "0 20px 20px 20px",
        }}
      >
        <VStack
          wFull
          sx={{
            borderRadius: "8px",
            bgcolor: "white",
          }}
        >
          {children}
        </VStack>
      </VStack>
    </Backdrop>
  );
}
