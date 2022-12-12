import {
  ApolloClient,
  ApolloLink,
  ApolloProvider,
  InMemoryCache,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { createUploadLink } from "apollo-upload-client";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import {
  accessTokenState,
  //  userInfoState
} from "../../../../src/commons/store";
import { getAccessToken } from "../../../commons/libraries/getAccessToken";

export default function ApolloSetting(props: any) {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const [, setUserInfo] = useRecoilState(userInfoState);

  // /////////////////////////////////////////////////
  // 1. 더 이상 지원되지 않음
  // if(process.browser){

  // }else{}

  // 2. 두번째 방법!!!
  if (typeof window !== "undefined") {
    console.log("여기는 브라우저다!!!");
    // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
    // setAccessToken(mylocalstorageAccessToken || "");
  } else {
    console.log("여기는 프론트엔드 서버다!!!(yarn dev 다!!!)");
  }

  // 3. 세번째 방법!!!
  useEffect(() => {
    // 옛날 방식

    // const AccessToken = localStorage.getItem("accessToken");
    // const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}");
    // setAccessToken(AccessToken || "");
    // setUserInfo(userInfo || "");
    // accessToken 재발급받아서 state에 넣어주기

    getAccessToken().then((newAccessToken) => {
      setAccessToken(newAccessToken);
    });
  }, []);

  //  여기가 프리렌더링시 문제되는 코드!!!
  // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
  // setAccessToken(mylocalstorageAccessToken || "");

  // /////////////////////////////////////////////////

  // 로그인 권한분기
  // error함수에서 {}이거 실행시켜줘
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크 === UNAUTHENTICATED
        if (err.extensions.code === "UNAUTHENTICATED") {
          // 2-1. refreshToken으로 accessToken을 재발급 받기
          // getAccessToken을 then해서 받아오기
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // const accessToken = "새로운거";

            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기 === forward하면 재요청 가능
            // operation.getContext().headers // api 에 작성되어있는 headers를 가지고 올수 있다.
            // 기존 headers
            // operation.getContext().headers

            // operation.setContext() // headers 부분을 변경이 가능하다.
            operation.setContext({
              headers: {
                // 기존에 있는 것들은 그대로 두게 합니다.
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`, // accessToken만 바꿔치기
              },
            });

            // 3-2. 변경된 operatrion 재요청하기
            // operatrion === 실패한 토큰
            return forward(operation);
          });
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "http://backend06.codebootcamp.co.kr/graphql",
    headers: { Authorization: `Bearer ${accessToken}` },
    // 중요한 정보를 포함 시킬것이냐? (include)
    // 이것을 해야 쿠키에 refreshToken이 들어갑니다.
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
