import { ChangeEvent, useMemo, useState } from "react";

import CTAContainer from "@/components/CTAContainer";
import NavFooter from "@/components/NavFooter";
import SHInputField, { InputFieldButton } from "@/components/base/SHInputField";
import SHLabel from "@/components/base/SHLabel";
import VStack from "@/components/base/stack/VStack";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { getSMSVerification, postRequestPhoneNumber } from "@/services/login/signin";
import { formatPhoneNumberInProgress, removeHyphens, validatePhoneNumber } from "@/utils/utils";
import { isEmpty } from "lodash";
import { useCountdown } from "usehooks-ts";

import { UseSignInType } from "../../_hooks/useSignIn";

type InfoPhoneNumberStepProps = {
  useSignin: UseSignInType;
  onClickSubmit: () => void;
};

export default function InfoPhoneNumberStep({
  useSignin,
  onClickSubmit,
}: InfoPhoneNumberStepProps) {
  const { router, infoData, updateFields } = useSignin;

  const [isRequestCert, setIsRequestCert] = useState(false);
  const [isSMSSuccess, setIsSMSSuccess] = useState<boolean | null>(null);
  const [count, { startCountdown, resetCountdown }] = useCountdown({
    countStart: 180,
    intervalMs: 1000,
  });

  const formattedCount = useMemo(() => {
    const mins = Math.floor(count / 60);
    const secs = count - 60 * mins;

    return `${mins}:${String(secs).padStart(2, "0")}`;
  }, [count]);

  const handleChangeInputPhoneNumber = (event: ChangeEvent<HTMLInputElement>) => {
    updateFields({ phoneNumber: formatPhoneNumberInProgress(event.target.value) });
  };

  const handleChangeInputCertCode = (event: ChangeEvent<HTMLInputElement>) => {
    const certCode = event.target.value;
    updateFields({ certCode });
  };

  const handleRequestCertificationNumber = async () => {
    if (isRequestCert) {
      // 재요청
      resetCountdown();
      startCountdown();
      updateFields({ certCode: null });
      setIsSMSSuccess(false);

      if (infoData.phoneNumber) {
        postRequestPhoneNumber({ phoneNumber: removeHyphens(infoData.phoneNumber) })
          .then(() => {
            startCountdown();
            setIsRequestCert(true);
          })
          .catch((error: Error) => {
            toast({ description: error.message });
          });
      }
    } else {
      if (infoData.phoneNumber) {
        postRequestPhoneNumber({ phoneNumber: removeHyphens(infoData.phoneNumber) })
          .then(() => {
            startCountdown();
            setIsRequestCert(true);
          })
          .catch((error: Error) => {
            toast({ description: error.message });
          });
      }
    }
  };

  const handleRequestVerificationCode = () => {
    if (infoData.phoneNumber && infoData.certCode) {
      getSMSVerification({
        phoneNumber: removeHyphens(infoData.phoneNumber),
        code: infoData.certCode,
      })
        .then(res => {
          if (res.authResult) {
            // 성공
            setIsSMSSuccess(true);
          } else {
            setIsSMSSuccess(false);
          }
        })
        .catch((error: Error) => {
          toast({ description: error.message });
        });
    }
  };

  return (
    <VStack className="h-full px-[20px]">
      <VStack className="mt-[60px]">
        <SHLabel type="SubTitle1" className="text-white">
          전화번호를 입력해주세요.
        </SHLabel>
        <VStack className="mt-[50px] gap-[50px]">
          <SHInputField
            label="전화번호"
            value={infoData.phoneNumber}
            type="tel"
            fontColor="white"
            onChange={handleChangeInputPhoneNumber}
            inputProps={{ maxLength: 13 }}
            InputProps={{
              endAdornment: (
                <InputFieldButton
                  disabled={
                    isEmpty(infoData.phoneNumber) || !validatePhoneNumber(infoData.phoneNumber)
                  }
                  onClick={handleRequestCertificationNumber}
                >
                  {isRequestCert ? "재요청" : "인증하기"}
                </InputFieldButton>
              ),
            }}
            helperText={
              isRequestCert && (
                <Label className="text-[#B8BFC4]">{`입력하신 전화번호로 인증 문자를 발송했습니다 ${formattedCount}`}</Label>
              )
            }
          />
          {isRequestCert && (
            <SHInputField
              label="인증코드"
              value={infoData.certCode}
              fontColor="white"
              onChange={handleChangeInputCertCode}
              inputProps={{ maxLength: 6, inputMode: "decimal", pattern: "[0-9]*" }}
              autoComplete="one-time-code"
              InputProps={{
                endAdornment: (
                  <InputFieldButton onClick={handleRequestVerificationCode}>확인</InputFieldButton>
                ),
              }}
              helperText={
                <Label className={cn(isSMSSuccess ? "text-[#A48AFF]" : "text-[#EB5847]")}>
                  {isSMSSuccess === null
                    ? ""
                    : isSMSSuccess
                      ? "인증이 완료 되었습니다."
                      : "인증코드 입력이 잘못되었습니다."}
                </Label>
              }
            />
          )}
        </VStack>
      </VStack>
      <CTAContainer className="px-0">
        <NavFooter
          ratio="1:3"
          left={{ onClick: router.back }}
          right={{
            disabled: !isRequestCert || !isSMSSuccess,
            onClick: () => {
              if (isRequestCert && isSMSSuccess) {
                onClickSubmit();
              }
            },
          }}
        />
      </CTAContainer>
    </VStack>
  );
}
