import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { visitedPageState } from "../../../commons/store";

export function useMoveToPage() {
  const router = useRouter();
  const [visitedPage, setVisitedPage] = useRecoilState(visitedPageState); // 마지막에 들어갔던 페이지 저장

  const onClickMoveToPage = (path: any) => () => {
    setVisitedPage(path);
    router.push(path);
  };
  return {
    // 객체로 return 합니다.
    visitedPage,
    onClickMoveToPage,
  };
}
