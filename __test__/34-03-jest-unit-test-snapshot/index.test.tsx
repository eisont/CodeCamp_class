import { render } from "@testing-library/react";
import JestUnitTestSnapShotPage from "../../pages/34-03-jest-unit-test-snapshot";

it("컴포넌트가 기존이랑 바뀐게 없는지 비교해보자 - 스냅샷 테스트", () => {
  const result = render(<JestUnitTestSnapShotPage />);

  // 두번째 테스트때부터 이상한게 있는지 없는지 검사를 합니다.
  // 전 화면과 달라진 것을 점검을 합니다.
  expect(result.container).toMatchInlineSnapshot(`
    <div>
      <div>
        철수는 13살입니다.
      </div>
      철수의 취미 입력하기: 
      <input
        type="text"
      />
      <button>
        철수랑 놀러가기
      </button>
    </div>
  `);
});
