"use client";

import { useRouter } from "next/navigation";

import { ReactNode } from "react";
import { IoIosArrowBack as ArrowBackIcon } from "react-icons/io";

import { IconButton } from "@mui/material";

import HStack from "./base/stack/HStack";

type NavHeaderProps = {
  leftButton?: ReactNode;
  rightButton?: ReactNode;
};

export default function NavHeader({ leftButton, rightButton }: NavHeaderProps) {
  const router = useRouter();

  const handleBackButton = () => {
    router.back();
  };

  return (
    <HStack className="h-[44px] items-center justify-between p-[10px] ">
      {leftButton ? (
        leftButton
      ) : (
        <IconButton onClick={handleBackButton} sx={{ padding: 0 }}>
          <ArrowBackIcon className="text-black-purple-suho" />
        </IconButton>
      )}
      {rightButton}
    </HStack>
  );
}
