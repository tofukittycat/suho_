import apiClient from "../apiClient";

export type AddUserInfoType = {
  birth: string | null;
  birthType: number | null;
  birthTime?: string | null;
  name: string | null;
  phoneNumber: string | null;
};

type AddUserInfoResponse = {
  id: number;
  email: string;
};

type ProfileUserInfoResponse = {
  id: number;
  color: string;
  animal: string;
  name: string;
  imageURL: string;
};

/** 추가 정보 입력 */
export const postAddUserInfo = async ({
  birth,
  birthType,
  birthTime,
  name,
  phoneNumber,
}: AddUserInfoType): Promise<AddUserInfoResponse> => {
  return (await apiClient.post("/users/info", { birth, birthType, birthTime, name, phoneNumber }))
    .data;
};

/** 유저 정보 (비로그인도 포함) */
export const getProfileUserInfo = async (): Promise<ProfileUserInfoResponse> => {
  return (await apiClient.get("/users/info")).data;
};

/** sms 인증 요청 */
export const postRequestPhoneNumber = async ({ phoneNumber }: { phoneNumber: string }) => {
  return (await apiClient.post("/sms-request", null, { params: { phoneNumber } })).data;
};

/** sms 인증코드 검증 */
export const getSMSVerification = async ({
  phoneNumber,
  code,
}: {
  phoneNumber: string;
  code: string;
}): Promise<{ authResult: boolean; phoneNumber: string }> => {
  return (await apiClient.get("/sms-verification", { params: { phoneNumber, code } })).data;
};
