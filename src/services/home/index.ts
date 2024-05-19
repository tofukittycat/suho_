import apiClient from "../apiClient";

type TreeInfoResponse = {
  userId: number;
  treeId?: number;
  username?: string;
  date?: string;
  tag?: string;
  isvisible?: false; // 3일전이면 true, 3일 이상 남았으면 false
  treeYn?: false; // 나무 존재 여부
};

// 홈에 나무 정보 조회
export const getTreeInfo = async ({ userId }: { userId: number }): Promise<TreeInfoResponse> => {
  return (await apiClient.get(`/tree/users/${userId}`)).data;
};

// 홈에 나무 부적들 조회
export const getTreeCharms = async ({
  userId,
  page,
  size,
}: {
  userId: number;
  page: number;
  size: number;
}): Promise<TreeInfoResponse> => {
  return (await apiClient.get(`/tree/charm/${userId}?page=${page}&size=${size}`)).data;
};
