import apiClient from "../apiClient";

export type AddUserInfoType = {
  birth: string | null;
  birthType: number | null;
  birthTime?: string | null;
  name: string | null;
};

type AddUserInfoResponse = {
  id: number;
  email: string;
};

/** 추가 정보 입력 */
export const postAddUserInfo = async ({
  birth,
  birthType,
  birthTime,
  name,
}: AddUserInfoType): Promise<AddUserInfoResponse> => {
  return (await apiClient.post("/users/info", { birth, birthType, birthTime, name })).data;
};
