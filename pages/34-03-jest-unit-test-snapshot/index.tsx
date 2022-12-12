// 모든 것을 테스트 할 수 없으니까 snapshot을 사용해서 테스트합니다.

export default function JestUnitTestSnapShotPage() {
  return (
    <>
      <div>철수는 13살입니다.</div>
      철수의 취미 입력하기: <input type="text" />
      <button>철수랑 놀러가기</button>
    </>
  );
}
