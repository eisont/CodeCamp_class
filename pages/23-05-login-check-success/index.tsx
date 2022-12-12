import { useQuery, gql } from "@apollo/client";
import { withAuth } from "../../src/components/commons/hocs/withAuth";
// import { useRouter } from "next/router";
// import { useEffect } from "react";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      email
      name
    }
  }
`;

function LoginSuccessPage() {
  // const router = useRouter();

  const { data } = useQuery(FETCH_USER_LOGGED_IN);

  // 문제점... 로그인페이지에 모두 있어야 합니다. 그럼 컴포넌트로 빼면 보다 편하겠네요.
  // withAuth 으로 빼겠습니다.
  // useEffect(() => {
  // 토큰이 있는지 확인해서 없으면 로그인 후 이용가능 안내문자 내보내기
  //   if (!localStorage.getItem("accessToken")) {
  //     alert("로그인 후 이용가능합니다.");
  //     router.push("/23-04-login-check");
  //   }
  // }, []);

  return <div>{data?.fetchUserLoggedIn.name}님 환영합니다!!!</div>;
}

// withAuth로 감싸서 실행합니다.
export default withAuth(LoginSuccessPage);
