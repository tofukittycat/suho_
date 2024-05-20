"use client";

import lStorage from "@/utils/storage";

export default function useStorage() {
  const clearStorage = () => {
    lStorage.clearAll();
  };
  const set = (key: string, value: string) => {
    lStorage.set(key, value);
  };

  const get = (key: string) => {
    return lStorage.get(key);
  };

  return {
    clearStorage,
    get,
    set,
  };
}
