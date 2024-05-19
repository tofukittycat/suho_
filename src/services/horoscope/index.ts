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

export const getTodayHoroscope = async ({ id }: { id: string }): Promise<TodayHoroscopeType> => {
  return (await apiClient.get(`/users/dailies/${id}`)).data;
};
