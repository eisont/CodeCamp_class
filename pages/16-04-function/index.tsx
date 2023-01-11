import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

// interface IState {
//   count: number;
// }

const CounterPage = () => {
  // aaa = createRef<HTMLInputElement>();
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null); // 태그를 변수에 담는 역할, ref의 초기는 null입니다. 설정해줘야 합니다.

  const [count, setCount] = useState(0);

  const onClickCounter = () => {
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push('/');
  };

  // 1. DidMount
  useEffect(() => {
    console.log('마운트 됨!!!');
    inputRef.current?.focus();
  }, []);
  // 1.1. DidMount
  // useEffect(() => {
  //   console.log('마운트 됨!!!');
  //   inputRef.current?.focus();
  // }, [count, write, title]);
  // 이렇게 의존성 배열에 3개 모두 작성 해놓으면 이 3개 중 하나라도 변경되면 리렌더링이 일어납니다.

  // 2. DidUpdate
  // 완전히 DidUpdate와 완전히 동일하지 않습니다. DidUpdate는 처음 로딩할 때 실행되지 얺지만 useEffect는 처음에 한 번 실행됩니다.
  useEffect(() => {
    console.log('수정되고 다시그려짐!!!');
  }); // 화면이 모두 그려지고 그려집니다. 그래서 console.log보다 느리게 실행되는 것입니다.

  // 3. DidMount와 WillUnmount
  // DidMount와 WillUnmount를 합치기!!!
  useEffect(() => {
    console.log('마움트욈!!!');
    inputRef.current?.focus();
    return () => {
      console.log('컴포넌트 사라짐!!!');
    };
  }, []);
  // [] => 의존성 배열 (Dependency Array), 무엇을 의존하느냐? -> 이 함수가 실행될지 안될지 의존한다는 말입니다.
  // [] 빈 배열은 한번만 실행되고 끝납니다.

  // 4. useEffect의 잘못된 사용 예, useEffect 렌더링 -> setState 렌더링
  // 4.1 추가렌더링
  // useEffect(() => {
  //   setCount(10);
  // }, []);
  // 4.2 무한루프
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  console.log('나는 언제 실행될까요???'); // 이게 제일 처음에 실행이 됩니다.

  // const onClickChatExit() => {
  //   api요청!!;
  // }

  // const onClickMove() => {
  //   Router.push("/");
  // }

  return (
    <div>
      <input
        type='text'
        ref={inputRef} // inputRef와 연결하겠습니다.
      ></input>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onClickMove}>ddd</button>
    </div>
  );
};

export default CounterPage;
