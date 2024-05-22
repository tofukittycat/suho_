"use client";

import { useRouter } from "next/navigation";

import { useState } from "react";

import useAppRepository from "@/components/hooks/useAppRepository";
import { AddUserInfoType } from "@/services/login/signin";

import useMutateAddUserInfo from "./queries/useMutateAddUserInfo";

type InfoDataType = {
  birth: string | null;
  birthType: number | null;
  name: string | null;
  birthTime: string | null;
};

export default function useSignIn() {
  const router = useRouter();

  const {
    userInfoStore: [userInfo, setUserInfo],
  } = useAppRepository();

  const { mutate: addUserInfo } = useMutateAddUserInfo();

  const [infoData, setInfoData] = useState<InfoDataType>({
    birth: null,
    birthType: 0,
    name: null,
    birthTime: null,
  });

  const updateFields = (fields: Partial<InfoDataType>) => {
    setInfoData(prev => ({ ...prev, ...fields }));
  };

  const handleGoToSignUp = () => {
    router.push("/signup/email");
  };

  const handleGoToEmail = () => {
    router.push("/signin/email");
  };

  const handleEmailSignIn = () => {
    // 로그인 정보가 있으면 홈으로,
    // 아니면 정보입력(생년월일, 이름)화면으로
    router.push("info/date");
  };

  const handleGoToName = () => {
    router.push("name");
  };

  const handleGoToHome = () => {
    router.push("/home");
  };

  const handleSiginKakao = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/oauth2/authorization/kakao`;
  };

  const handleAddUserInfo = (infoData: AddUserInfoType) => {
    addUserInfo(
      {
        birth: infoData.birth,
        birthType: infoData.birthType ?? 0,
        birthTime: infoData.birthTime,
        name: infoData.name,
      },
      {
        onSuccess(data, variables) {
          setUserInfo({
            ...userInfo,
            userId: data.id,
            birth: variables.birth ?? "",
            birthType: variables.birthType ?? 0,
            birthTime: variables.birthTime ?? "",
            username: variables.name ?? "",
          });

          handleGoToHome();
        },
      },
    );
  };

  return {
    router,
    infoData,
    updateFields,
    handleGoToSignUp,
    handleGoToEmail,
    handleEmailSignIn,
    handleGoToName,
    handleGoToHome,
    handleSiginKakao,
    handleAddUserInfo,
  };
}

export type UseSignInType = ReturnType<typeof useSignIn>;
