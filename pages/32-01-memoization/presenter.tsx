import { memo } from "react";

function MemoizationPresenterPage() {
  console.log("프리젠터가 렌더링 됩니다!!!!");

  return (
    <>
      <div>==========================</div>
      <h1>이것은 프리젠터 입니다.</h1>
      <div>==========================</div>
    </>
  );
}

export default memo(MemoizationPresenterPage);
// 이 놈을 메모해서 사용하겠습니다.
