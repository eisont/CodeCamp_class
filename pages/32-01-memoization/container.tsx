import { useCallback, useMemo, useState } from "react";
import MemoizationPresenterPage from "./presenter";

export default function MemoizationContainerPage() {
  console.log("컨테이너가 렌더링 됩니다!!!");

  let countLet = 0; // 이 숫자를 바뀌게 하고 싶지 않아요. === useMemo
  const [countState, setCountState] = useState(0);

  // const aaa = useMemo(() => {
  //   return Math.random();
  // }, []);
  // return 은 한 줄일때 중괄호 return 생략이 가능합니다.

  // useMemo()는 꽤 많이 사용하지 않습니다.
  // 함수를 메모해서 사용할 때 useCallback()을 사용합니다.
  const aaa = useMemo(() => Math.random(), []);
  // [] === 특정한 것이 실행될 때 해줘~ 의존성 배열
  // 이렇게 하면 값이 바뀌지 않고 그대로 남아있습니다.

  console.log(aaa);

  // const onClickCountLet = () => {
  //   console.log(countLet + 1);
  //   countLet += 1; // countLet = countLet + 1
  // };

  // const onClickCountState = () => {
  //   console.log(countState + 1);
  //   setCountState(countState + 1);
  // };

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1; // countLet = countLet + 1
  }, []);

  // const onClickCountState = useCallback(() => {
  // console.log(countState + 1);
  // setCountState(countState + 1); // state까지 같이 기억해버렸습니다.
  // setCountState((prev) => prev + 1);
  // useCallback() 은 state를 감싸면 문제가 생길 수 있습니다.
  // }, []);
  // 의존성 배열이 커지게 되면 들어갈 경우 예상치 못한 오류가 많아집니다.
  // 의존성 배열에 따라 사용하는 것을 달리 해야 합니다.

  // useMemo로 useCallback 만들어보기!!!
  const onClickCountState = useMemo(() => {
    return () => {
      console.log(countState + 1);
      setCountState((prev) => prev + 1);
    };
  }, []);

  return (
    <>
      <>=============================================================</>
      <h1>이건 컨테이너 입니다.</h1>
      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) +1 올리기!!!</button>
      {/* 버튼 안에 직접 작성해서 사용이 가능합니다. 이렇게 하면 다시 리렌더 되기 때문에 가급적 Callback으로 감싸서 사용하는 것을 권장합니다. */}
      {/* <button
        onClick={() => {
          setCountState((prev) => prev + 1);
        }}
      >
        카운트(let) +1 올리기!!!
      </button> */}
      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1 올리기!!!</button>
      <>=============================================================</>
      {/* props로 넘긴 애들은 리렌더가 되므로 리렌더가 필요한 애들만 넘겨야 합니다. 자식에 memo가 있더라도 props는 리렌더가 됩니다. */}
      <MemoizationPresenterPage />
    </>
  );
}
