import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 1000px;
  height: 1000px;
  background: red;

  // 768px 보다 크고 991px 보다는 작아야 합니다.
  @media (min-width: 768px) and (max-width: 991px) {
    width: 500px;
    height: 500px;
    background: green;
  }
  // 모바일 크기
  @media (max-width: 767px) {
    width: 100px;
    height: 100px;
    background: blue;
    // 모바일에서 보이지 마!!!
    // display: none;
  }
`;

export default function ResponsiveDesignPage() {
  return <Wrapper>상자</Wrapper>;
}
