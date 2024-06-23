import apiClient from "../apiClient";

type UserCheckInfoResponse = {
  id: number;
  hasInfo: boolean; // false이면 유저 추가 정보를 입력해야 함.
};

// 추가 정보 입력 체크
export const getUserCheckInfo = async (): Promise<UserCheckInfoResponse> => {
  return (await apiClient.get(`/users/check-info`)).data;
};

type UserInfoResponse = {
  id: string;
  email: string;
  birth: string;
  birthTime: string;
  birthType: number;
  username: string;
  socialType: string;
};

// 유저 정보 조회
export const getUserInfo = async (): Promise<UserInfoResponse> => {
  return (await apiClient.get(`/users/my`)).data;
};

// 유저 정보 업데이트
export const patchUpdateUserInfo = async ({
  userId,
  birth,
  birthTime,
}: {
  userId: number;
  birth: string;
  birthTime: string;
}) => {
  return (await apiClient.patch(`/users/my/${userId}`, { birth, birthTime })).data;
};

export const deleteWithdrawal = async () => {
  return (await apiClient.delete("/users/signout")).data;
};
