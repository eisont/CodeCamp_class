import { useState } from "react";

// 정해져있지 않은 이름들
// CounterStatePage===함수명 ,count 변수명, counter() 함수명

export default function CounterStatePage() {
  const [count, setCount] = useState(0);


  // 카운트 올리기 버튼을 누를때 작동 함수
  function counter() {
    setCount(count + 1);
  }

  return (
    <div>
      <div>{count}</div>
      <button onClick={counter}>카운트 올리기!!!</button>
    </div>
  );
}

// 이 코드가 훨씬 쉽고 간단하고 쓰기 편하다
