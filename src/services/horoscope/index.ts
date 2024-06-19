import apiClient from "../apiClient";

type TodayHoroscopeType = {
  today: string;
  luckSpirit: string;
  imageUrl?: string;
  gptResponse: GptResponseType;
  name?: string;
};

type GptResponseType = {
  affectionHoroscope: string;
  businessHoroscope: string;
  dailyHoroscope: string;
  dailyHoroscopeTitle: string;
  hopeHoroscope: string;
  luckSpiritContent: string;
  moneyHoroscope: string;
};

type SupplementType = {
  description: string;
  images: Array<{ url: string }>;
};

export type StickersResponse = {
  charmImageURL: string;
  supplementTypes: SupplementType[];
};

/** 데일리 운세 */
export const getTodayHoroscope = async ({ id }: { id: number }): Promise<TodayHoroscopeType> => {
  return (await apiClient.get(`/users/dailies/${id}`)).data;
};

/** 부적 삭제 */
export const deleteCharm = async ({ charmId }: { charmId: number }) => {
  return (await apiClient.delete(`/charms/${charmId}`)).data;
};

/** 데일리 운세 부적 조회 */
export const getTodayHoroscopeCharmInfo = async (): Promise<{ imageURL: string }> => {
  return (await apiClient.get(`/users/dailies/charm`)).data;
};

/** 부적에 관한 스티커 조회 */
export const getTodayHoroscopeStickerInfo = async ({
  imageURL,
}: {
  imageURL: string;
}): Promise<StickersResponse> => {
  return (await apiClient.post(`/users/dailies/stickers`, { imageURL })).data;
};
