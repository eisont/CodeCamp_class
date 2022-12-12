import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import JestUnitTestPage from "../../pages/34-02-jest-unit-test";

it("내가 원하는대로 그려지는지 테스트하기", () => {
  render(
    // 원하는 테그를 여기에 입력하면 됩니다.
    <JestUnitTestPage /> // 가짜로 렌더링하는 것입니다.
  );
  const myText1 = screen.getByText("철수는 13살 입니다.");
  // 렌더링된 다큐먼트에 있는지 확인해줘 =.toBeInTheDocument()
  expect(myText1).toBeInTheDocument();

  const myText2 = screen.getByText("철수의 취미 입력하기: ");
  expect(myText2).toBeInTheDocument();

  const myText3 = screen.getByText("철수랑 놀러가기");
  expect(myText3).toBeInTheDocument();
});
