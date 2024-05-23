import apiClient from "../apiClient";

type TodayHoroscopeType = {
  today: string;
  luckSpirit: string;
  imageUrl?: string;
  gptResponse: GptResponseType;
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

/** 데일리 운세 */
export const getTodayHoroscope = async ({ id }: { id: number }): Promise<TodayHoroscopeType> => {
  return (await apiClient.get(`/users/dailies/${id}`)).data;
};

/** 부적 삭제 */
export const deleteCharm = async ({ charmId }: { charmId: number }) => {
  return (await apiClient.delete(`/charms/${charmId}`)).data;
};
