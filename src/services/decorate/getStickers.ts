import apiClient from "../apiClient";

type SupplementType = {
  description: string;
  images: Array<{ url: string }>;
};

export type StickersResponse = {
  charmImageURL: string;
  supplementTypes: SupplementType[];
};

// 스티커 조회
export const getStickers = async ({ treeId }: { treeId: number }): Promise<StickersResponse> => {
  return (await apiClient.get(`/tree/${treeId}/stickers`)).data;
};
