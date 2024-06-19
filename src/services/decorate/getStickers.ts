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

// 부적 생성
export const createWriteCharm = async ({
  treeId,
  sender,
  image,
}: {
  treeId: number;
  sender: string;
  image: Blob;
}) => {
  return (
    await apiClient.post(
      `/tree/${treeId}/charm`,
      { sender, image },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      },
    )
  ).data;
};
