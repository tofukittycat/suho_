"use client";

import { create } from "zustand";

type BGStateType = {
  visibleBGHill: boolean;
  setVisibleBGHill: (value: boolean) => void;
};

const useBackgroundState = create<BGStateType>(set => ({
  visibleBGHill: false,
  setVisibleBGHill: (value: boolean) => {
    set({ visibleBGHill: value });
  },
}));

export default useBackgroundState;
