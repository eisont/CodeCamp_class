import { ApolloClient, ApolloLink, ApolloProvider, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { createUploadLink } from 'apollo-upload-client'; // 이미지를 올리기 위해서 필요한 라이브러리, 19강
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import {
  accessTokenState,
  //  userInfoState
} from '../../../../src/commons/store';
import { getAccessToken } from '../../../commons/libraries/getAccessToken';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apikey: 'AIzaSyAglw0=9qEenZ6c7Zism7Psr1a6qnGjMalJE',
  authDomain: 'mysite222-16104.firebaseapp.com',
  projectId: 'mysite222-16104',
  storageBucket: 'mysite222-16104.appspot.com',
  messagingSenderId: '7943492381219',
  appId: '1:794349238219:web:652a5e3220933ef0a6684e',
};

export const firebaseApp = initializeApp(firebaseConfig);

const ApolloSetting = (props: any) => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  // const [, setUserInfo] = useRecoilState(userInfoState);

  // /////////////////////////////////////////////////
  // 1. 더 이상 지원되지 않음
  // if(process.browser){

  // }else{}

  // 2. 두번째 방법!!!
  if (typeof window !== 'undefined') {
    console.log('여기는 브라우저다!!!');
    // const mylocalstorageAccessToken = localStorage.getItem("accessToken");
    // setAccessToken(mylocalstorageAccessToken || "");
  } else {
    console.log('여기는 프론트엔드 서버다!!!(yarn dev 다!!!)');
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
  // 토큰이 만료된 경우 새로운 토큰으로 변경시켜줘!!! restoreAcessToken을 사용해서
  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    // 1-1. api 실패시 graphQlErrors에서 에러를 캐치
    if (graphQLErrors) {
      for (const err of graphQLErrors) {
        // 1-2. 해당 에러가 토큰만료 에러인지 체크 === UNAUTHENTICATED
        if (err.extensions.code === 'UNAUTHENTICATED') {
          // 2-1. refreshToken으로 accessToken을 재발급 받기
          // getAccessToken을 then해서 받아오기, return 값이 ()안으로 들어갑니다.
          getAccessToken().then((newAccessToken) => {
            // 2-2. 재발급 받은 accessToken 저장하기
            setAccessToken(newAccessToken);

            // const accessToken = "새로운거";

            // 3-1. 재발급 받은 accessToken으로 방금 실패한 쿼리 재요청하기 === forward하면 재요청 가능
            // operation.getContext().headers // api 에 작성되어있는 headers를 가지고 올수 있다.

            // operation.getContext().headers => 기존에 등록되어 있던 headers

            // operation.setContext() // headers 부분을 변경이 가능하다. => setContext()는 기존의 Context를 조작할 수 있습니다.
            // operation => 방금 실패했던 Query
            operation.setContext({
              headers: {
                // 기존에 header를 그대로 가지고 오고 Authorization만 변경합니다.
                ...operation.getContext().headers,
                Authorization: `Bearer ${newAccessToken}`, // accessToken만 바꿔치기
              },
            });

            // 3-2. 변경된 operatrion 재요청하기 => 재요청된 header를 변경시켜줘!
            // operatrion === 실패한 토큰
            // forward => 전송해줘
            return forward(operation);
          });
        }
      }
    }
  });

  // 4강, 19강
  // 이렇게 변수에 따로 담아서 넣는 방법으로 확장시킵니다.
  const uploadLink = createUploadLink({
    uri: 'https://backend10.codebootcamp.co.kr/graphql',
    headers: { Authorization: `Bearer ${accessToken}` },
    // 중요한 정보를 포함 시킬것이냐? (include)
    // 이것을 해야 쿠키에 refreshToken이 들어갑니다.
    credentials: 'include',
  });

  const client = new ApolloClient({
    // from([])안에 대괄호로 넣어야 합니다.
    link: ApolloLink.from([errorLink, uploadLink]),
    // cache를 변수에 저장을 하겠습니다. 메모리에 저장하면 브라우저를 껐다 키면 사라집니다.
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
};

export default ApolloSetting;
