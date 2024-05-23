/* eslint-disable indent */
import lStorage from "@/utils/storage";

/* eslint-disable @typescript-eslint/no-explicit-any */

export const localStorageEffect =
  (key: string) =>
  ({ setSelf, onSet }: any) => {
    const savedValue = lStorage.get(key);
    if (savedValue !== null) {
      setSelf(savedValue);
    }
    onSet((newValue: any, _: any, isReset: boolean) => {
      isReset ? lStorage.remove(key) : lStorage.set(key, newValue);
    });
  };
