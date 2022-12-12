import { useRouter } from "next/router";
import { useEffect } from "react";

export function useAuth() {
  // useAuth를 aaa라고 해도 가능합니다. 실행하는데는 문제가 없지만 나중에 예상치 못한 오류를 잡기 위해서 use를 사용해서 훅들을 사용한다는 것을 명시하겠습니다. 그리고 docs에 사용을 매우 권장하고 있습니다.

  const router = useRouter();
  // const [isLoading, setIsLoading] = useState(true);

  // 권한분기 로직 추가하기
  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      alert("로그인 후 이용가능합니다.");
      router.push("/23-04-login-check");
    }
  }, []);

  // return {
  //   isLoading, // key와 value가 같아서 생략이 가능합니다. shorthand property?
  // };
  // []으로 하든 {} 하든 상관 없습니다.
}
