"use client";

import lStorage, { StorageKeys } from "@/utils/storage";
import { isEmpty } from "lodash";

import useStorage from "./useStorage";

export default function useAuth() {
  const { get, set } = useStorage();

  const token = get(StorageKeys.Token) as string;

  const isEmptyToken = isEmpty(token);

  const updateToken = (token: string) => {
    set(StorageKeys.Token, token);
  };

  const clearToken = () => {
    lStorage.remove(StorageKeys.Token);
  };

  return {
    token,
    isEmptyToken,
    updateToken,
    clearToken,
  };
}
