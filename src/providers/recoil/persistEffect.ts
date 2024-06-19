/* eslint-disable indent */
import lStorage from "@/utils/storage";
import { recoilPersist } from "recoil-persist";

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

export const { persistAtom: persistSession } = recoilPersist({
  key: "SH_Session",
  storage: typeof window !== "undefined" ? window.sessionStorage : undefined,
});
