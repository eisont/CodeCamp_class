import { useCallback, useMemo, useState } from 'react'; // useMemo를 통해서 값을 저장할 수 있고, useCallback을 통해서 함수를 저장할 수 있습니다.
// 게시판 형태에서 많이 사용합니다.
import MemeizationPresenterPage from './presenter';

// 절대 변하지 않는 상숫값인 경우 이쪽에 작성합니다. / 리렌더링이 되지 않습니다.

const MemoizationContainerPage = () => {
  console.log('컨테이너가 렌더링 됩니다.');

  const [countState, setCountState] = useState(0);

  // const aaa = Math.random();
  const aaa = useMemo(() => Math.random(), []);
  // const aaa = useMemo(() => Math.random(), [의존성 배열]);
  // 컴포넌트 안에서 사용해야 하고 복잡한 계산을 해서 저장을 해야 하는 것이다!!! -> 이럴 경우 리렌더링이 되면 안되니까 useMemo를 사용합니다.
  // memo는 잘 쓰이지만 useMemo는 잘 쓰이지 않습니다.
  // useCallback() 함수가 다시 만들어지지 않기 위해 사용합니다.
  console.log(aaa);

  let countLet = 0;

  // const onClickCountLet = () => {
  //   console.log(countLet + 1); // 화면에 그려지는 않습니다. / 밑 버튼을 클릭해서 숫자를 높여놓고 useState를 클릭할 경우 리렌더링되서 let의 데이터는 초기화됩니다.
  //   countLet += 1; // countLet = countLet + 1;
  // };

  const onClickCountLet = useCallback(() => {
    console.log(countLet + 1);
    countLet += 1;
  }, []);

  // const onClickCountState = () => {
  //   console.log(countState + 1);
  //   setCountState(countState + 1); // useState를 사용할 경우 동작할 때마다 렌더링됩니다.
  //   // state를 올리면 useHook 빼고는 모두 초기화됩니다. + 자식 요소까지 모두 초기화 됩니다. -> 규모가 크면 클수록 이런 현상때문에 좋지 않습니다.
  // };
  // const onClickCountState = useCallback(() => {
  //   console.log(countState + 1); // 이렇게 할 경우 state도 같이 기억을 합니다. / useCallback을 할 경우에는 state를 사용을 자제해야 합니다.
  //   setCountState((prev) => prev + 1);
  // }, []);

  // useMemo로 useCallback 만들어보기!!! -> 실무에서는 잘 사용하지 않는다.
  // bbb는 useCallback 형태의 함수이다.
  const onClickCountState = useMemo(() => {
    return () => {
      setCountState((prev) => prev + 1);
    };
  }, []);

  return (
    <div>
      <div>================================</div>
      <h1>이것은 컨테이너 입니다.!!!</h1>

      <div>카운트(let): {countLet}</div>
      <button onClick={onClickCountLet}>카운트(let) + 1 올리기</button>

      <div>카운트(state): {countState}</div>
      <button onClick={onClickCountState}>카운트(state) +1올리기</button>
      <div>================================</div>

      <MemeizationPresenterPage countState={countState} />
    </div>
  );
};

export default MemoizationContainerPage;
