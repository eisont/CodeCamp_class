import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
} from "../../../commons/store";

// {}, return 이 있지만 한 줄이라 생략
// @ts-ignore
// ts 무시
export const withAuth = (Component) => (props) => {
  const router = useRouter();
  const [accessToken] = useRecoilState(accessTokenState);
  const restoreAccessToken = useRecoilValueLoadable(restoreAccessTokenLoadable);

  // 권한분기 로직 추가하기
  useEffect(() => {
    // 1. 옛날방식
    // if (!localStorage.getItem("accessToken")) {
    //   alert("로그인 후 이용 가능합니다!!!");
    //     router.push("/22-01-login");
    // }

    // 2. 로딩방식
    // if (!isLoaded && !accessToken) {
    //   getAccessToken().then((newAccessToken) => {
    //     if (!newAccessToken) {
    //       alert("로그인 후 이용 가능합니다!!!");
    //       router.push("/22-01-login");
    //     }
    //   });
    // }

    // 3. 글로벌 프로미스 방식(비회원 접근시 토큰 재발급 요청 방지를 위해 로딩과 함께 사용할 것)
    // 함수를 공유해서 사용하는 방식
    if (!accessToken) {
      restoreAccessToken.toPromise().then((newAccessToken) => {
        if (!newAccessToken) {
          alert("로그인 후 이용 가능합니다!!!");
          router.push("/23-04-login-check");
        }
      });
    }
  }, []);

  return <Component {...props} />;
};
