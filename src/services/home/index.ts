import apiClient from "../apiClient";

type TreeInfoResponse = {
  userId: number;
  treeId?: number | null;
  username?: string;
  date?: string;
  tag?: string;
  visibleCharm?: false; // 3일전이면 true, 3일 이상 남았으면 false
};

// 홈에 나무 정보 조회
export const getTreeInfo = async ({ userId }: { userId: number }): Promise<TreeInfoResponse> => {
  return (await apiClient.get(`/tree/users/${userId}`)).data;
};

type TreeCharmsResponse = {
  totalSize: number;
  treeCharmResponseList: TreeCharmItem[];
};

export type TreeCharmItem = {
  charmId: number;
  sender: string;
  imageUrl?: string | null;
  thumbnailUrl?: string | null;
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
}): Promise<TreeCharmsResponse> => {
  return (await apiClient.get(`/tree/charm/${userId}?page=${page}&size=${size}`)).data;
};
