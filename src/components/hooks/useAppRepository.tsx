import { RecoilKeys } from "@/providers/recoil/keys";
import { localStorageEffect, persistSession } from "@/providers/recoil/persistEffect";
import { atom, useRecoilState } from "recoil";

type UserInfoType = {
  userId?: number | null;
  treeId?: number | null;
  birth?: string;
  birthType?: number;
  birthTime?: string;
  username?: string;
  owner?: boolean; // false 면 guest
};

export const userInfoState = atom<UserInfoType>({
  key: RecoilKeys.UserInfo,
  default: undefined,
  effects: [localStorageEffect(RecoilKeys.UserInfo)],
});

export const visibleBGState = atom<boolean>({
  key: RecoilKeys.VisibleBG,
  default: false,
  effects: [localStorageEffect(RecoilKeys.VisibleBG)],
});

type DecorateUserType = {
  onlyDownload: boolean;
  imageURL: string;
  blobURL: string;
};

export const decorateInfoState = atom<DecorateUserType>({
  key: RecoilKeys.DecorateInfo,
  default: {
    onlyDownload: false,
    imageURL: "",
    blobURL: "",
  },
  effects_UNSTABLE: [persistSession],
});

export default function useAppRepository() {
  const userInfoStore = useRecoilState(userInfoState);
  const visibleBGStore = useRecoilState(visibleBGState);
  const decorateInfoStore = useRecoilState(decorateInfoState);

  return { userInfoStore, visibleBGStore, decorateInfoStore };
}

// type UserInfoStateType = {
//   userId: number | null;
//   setUserId: (userId: number) => void;

//   birth: string | null;
//   setBirth: (birth: string) => void;

//   birthType: number | null;
//   setBirthType: (birthType: number) => void;

//   birthTime?: string | null;
//   setBirthTime: (birthTime: string) => void;

//   username: string | null;
//   setName: (username: string) => void;

//   setUserInfo: ({ userId, birth, birthType, birthTime, username }: UserInfoType) => void;
// };

// const useUserInfo = create<UserInfoStateType>(set => ({
//   userId: null,
//   setUserId: (userId: number) => {
//     set({ userId });
//   },

//   birth: null,
//   setBirth: (birth: string) => {
//     set({ birth });
//   },

//   birthType: null,
//   setBirthType: (birthType: number) => {
//     set({ birthType });
//   },

//   birthTime: null,
//   setBirthTime: (birthTime: string) => {
//     set({ birthTime });
//   },

//   username: null,
//   setName: (username: string) => {
//     set({ username });
//   },

//   setUserInfo: ({ userId, birth, birthType, birthTime, username }: UserInfoType) => {
//     if (userId) {
//       set({ userId });
//     }
//     if (birth) {
//       set({ birth });
//     }
//     if (birthType) {
//       set({ birthType });
//     }
//     if (birthTime) {
//       set({ birthTime });
//     }
//     if (username) {
//       set({ username });
//     }
//   },
// }));

// export default useUserInfo;
