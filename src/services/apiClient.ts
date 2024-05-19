import lStorage, { StorageKeys } from "@/utils/storage";
import axios, { AxiosError } from "axios";

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use(config => {
  const accessToken = lStorage.get(StorageKeys.Token);

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

apiClient.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    // const { data, status, config } = error.response;
    return Promise.reject(error);
  },
);

export default apiClient;
