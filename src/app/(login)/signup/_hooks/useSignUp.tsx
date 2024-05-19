"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";

import useMutateRequestCertificationNumber from "@/app/(login)/signup/_hooks/queries/useMutateRequestCertificationNumber";
import { zodResolver } from "@hookform/resolvers/zod";

import { SignUpScheme } from "../../signin/_types/scheme";

export default function useSignUp() {
  const router = useRouter();

  const { control, handleSubmit, register } = useForm({
    resolver: zodResolver(SignUpScheme),
    mode: "onChange",
  });

  const { mutate: requestCertificationNumber } = useMutateRequestCertificationNumber();

  const onSubmit = (data: unknown) => {
    console.log("data!!!!!!", data);
  };

  const handleRequestCertificationNumber = () => {
    requestCertificationNumber("seungjin429@gmail.com");
  };

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
    register,
    handleSubmit: handleSubmit(onSubmit),
    handleRequestCertificationNumber,
    handleConfirmEmail,
    handleSignUp,
    handleGoToSignIn,
  };
}
