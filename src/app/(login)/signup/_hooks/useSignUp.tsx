"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { SignUpScheme, SignUpType } from "../../signin/_types/scheme";

export default function useSignUp() {
  const router = useRouter();

  const { control } = useForm<SignUpType>({ resolver: zodResolver(SignUpScheme) });

  const handleConfirmEmail = () => {
    router.push("password");
  };

  const handleSignUp = () => {
    router.push("success");
  };

  const handleGoToSignIn = () => {
    router.replace("/signin");
  };

  return {
    router,
    control,
    handleConfirmEmail,
    handleSignUp,
    handleGoToSignIn,
  };
}
