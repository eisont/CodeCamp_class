// 이 페이지는 로그인 한 사람만 입장 가능합니다.
// hooks을 import해서 사용합니다. 보다 편리합니다.
// 동일한 함수인데 왜 use로 나눠서 관리를 하는가? === 가독성을 위해?

// import {withAuth} from '../../src/components/commons/hooks/useAuth'
import { useAuth } from "../../src/components/commons/hooks/useAuth";

function CustomHooksUseAuthPage() {
  // 네이밍은 페이지와 동일하게 했습니다.
  useAuth();

  return <div> 철수의 프로필 페이지입니다. </div>;
}

export default CustomHooksUseAuthPage;
