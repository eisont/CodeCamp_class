// 하나로 통일할 수 없을까?
// onClick 이런 함수들을 하나로 모아서 관리할 수 없을까?

// import { useRouter } from "next/router";
import { useMoveToPage } from "../../src/components/commons/hooks/useMoveToPage";

export default function CustomHooksUseMoveTopage() {
  // const router = useRouter();
  // const onClickMoveToPage = (page) => () => {
  //   router.push(page);
  // };

  const { onClickMoveToPage } = useMoveToPage();
  // 이제 페이지 이동할때는 이것만 사용하면 됩니다.

  return (
    <div>
      <button onClick={onClickMoveToPage("/board")}>게시판으로 이동</button>
      <button onClick={onClickMoveToPage("/market")}>마켓으로 이동</button>
      <button onClick={onClickMoveToPage("/mypage")}>마이페이지로 이동</button>
    </div>
  );
}
