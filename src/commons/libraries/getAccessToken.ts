// apollo 없이 graphql을 axios 형태로 사용하기 위한 라이브러리
// graphql 은 restApi로 만들어졌습니다.
import axios from 'axios';
import { GraphQLClient, gql } from 'graphql-request';

const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

// 토큰을 얻어오는 함수
export const getAccessToken = async () => {
  // 실패할수도 있다. try catch로 잡겠다.
  try {
    // ==============================================================
    // 밑에 방법과 동일한 방법, request를 사용하지 않고 axios를 사용하는 방법

    // axios.post("https://backend10.codebootcamp.co.kr/graphql", {
    //   query:`
    //     mutation restoreAccessToken {
    //       restoreAccessToken {
    //         accessToken
    //       }
    //     }
    //   `
    // })
    // ==============================================================

    // https로 변경을 해야 합니다.
    const graphQLClient = new GraphQLClient('https://backend10.codebootcamp.co.kr/graphql', { credentials: 'include' });
    // 중요한 정보를 포함 시킬것이냐? (include)
    // 이것을 해야 쿠키에 refreshToken이 들어갑니다.

    // useMutation === apolloclient 세팅이 완료하해야 사용이 가능합니다.
    // 지금은 세팅이 미완성이라 axios 형태로 사용하겠습니다.
    // apolloclient가 세팅이 되지 않을때 apolloclient를 사용하기 위해 graphql-request graphql 라이브러리를 사용하겠습니다.
    const result = await graphQLClient.request(RESTORE_ACCESS_TOKEN);
    // apollo 때랑은 다르다. result.data로 담겨있지 않다.
    // newAccessToken 가지고서 실패한 ~~~ 을 다시 ~~~ 하겠습니다.
    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error: any) {
    console.log(error.message);
  }
};
