// 글로벌스테이트
// 공용으로 사용할 변수

// atom({
//   key: 구분할 이름,
//   default: 초깃값
// })

import { atom, selector } from "recoil";
import { getAccessToken } from "../libraries/getAccessToken";

// 게시판
export const isEditState = atom({
  key: "isEditState",
  default: false,
});

// 로그인
export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isLoadedState = atom({
  key: "isLoadedState",
  default: true,
});

// 로그인 유저 정보 (패치)
export const userInfoState = atom({
  key: "userInfoState",
  default: {
    emmail: "",
    name: "",
  },
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

// 같은 함수를 여러 컴포넌트에서 공유합니다.  === 글로벌 함수
export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});
