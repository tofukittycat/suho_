import apiClient from "../apiClient";

type TreeFortuneType = {
  guardianResponse: GuardianType;
  luckySpiritResponse: LuckySpiritType;
};

type GuardianType = {
  name: string;
  spirit: string;
  color: string;
  animal: string;
  personality: string;
  tendency: string;
  description: string;
  imageURL?: string;
};

type LuckySpiritType = {
  luckyDate: string;
  luckySpirit: string;
  description: string;
};

type CreateLuckyTreeResponse = {
  id: string;
};

type TreeCharmDetailsResponse = {
  id: number;
  sender: string;
  imageURL?: string;
};

/** 나무 생성 */
export const postCreateLuckyTree = async ({
  luckyDate,
  tag,
}: {
  luckyDate: string;
  tag: string;
}): Promise<CreateLuckyTreeResponse> => {
  return (await apiClient.post("/tree/create", { luckyDate, tag })).data;
};

/** 나무 사주 확인 */
export const getTreeFortune = async ({ treeId }: { treeId: number }): Promise<TreeFortuneType> => {
  return (await apiClient.get(`/tree/${treeId}/sandbar`)).data;
};

/** 부적 상세 조회 */
export const getTreeCharmDetails = async ({
  charmId,
}: {
  charmId: number;
}): Promise<TreeCharmDetailsResponse> => {
  return (await apiClient.get(`/charms/${charmId}`)).data;
};
