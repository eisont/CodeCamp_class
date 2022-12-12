import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

interface IState {
  count: number;
}

export default function CounterPage() {
  // aaa = createRef<HTMLInputElement>();
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  const [count, setCount] = useState(0);

  const onClickCounter = () => {
    // console.log(this);
    // // console.log("카운터 클릭!!!");
    // console.log(this.state.count);
    // this.setState((prev: IState) => ({
    //   count: prev.count + 1,
    // }));
    setCount((prev) => prev + 1);
  };

  const onClickMove = () => {
    router.push("/");
  };

  // 1. DidMount
  // const componentDidMount () => {
  //   console.log("마운트됨!!!");
  //   // 포커스 깜빡깜빡
  //   // this.aaa.current?.focus();
  // }

  // 2. DidUpdate
  // const componentDidUpdate () => {
  //   console.log("수정되고 다시그려짐");
  //   //
  // }
  useEffect(() => {
    console.log("수정되고 다시그려짐!!!");
  });

  // 3. WillUnmount
  // const componentWillUnmount() => {
  //   console.log("컴포넌트 사라짐!!!");
  //   // 채팅방 나가기
  //   // api 요청!!!
  // }

  // 4. DidMount와 WillUnmount
  // DidMount와 WillUnmount를 합치기!!!
  useEffect(() => {
    console.log("마움트욈!!!");
    inputRef.current?.focus();
    return () => {
      console.log("컴포넌트 사라짐!!!");
    };
  }, []);

  // 5. useEffect의 잘못된 사용 예( 1. 추가렌더링, 2. 무한루프)
  // useEffect(() => {
  //   setCount((prev) => prev + 1);
  // }, [count]);

  console.log("나는 언제 실행될까요???");

  // const onClickChatExit() => {
  //   api요청!!;
  // }

  // const onClickMove() => {
  //   Router.push("/");
  // }

  return (
    <div>
      <input type="text" ref={inputRef}></input>
      <div>현재 카운트: {count}</div>
      <button onClick={onClickCounter}>카운트 올리기!!!</button>
      <button onClick={onClickMove}>ddd</button>
    </div>
  );
}
