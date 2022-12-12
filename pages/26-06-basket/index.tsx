// 게시글 목록을 불러오겠습니다. fetchBoards로 불러옵니다.
// 불러온 것을 map으로 뿌립니다.
// 장바구니 담기
import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import { IBoard } from "../../src/commons/types/generated/types";

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      _id
      writer
      title
      contents
    }
  }
`;

const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

export default function BasketPage() {
  const { data } = useQuery(FETCH_BOARDS);

  const onClickBasket = (el: any) => () => {
    console.log(el);

    // 1. 기존 장바구니 가져오기
    const baskets = JSON.parse(localStorage.getItem("baskets") || "[]");

    // 같은 상품들을 담지 않아야 합니다. 담은 것과 같으면 담지 않겠습니다.
    // 임시로 담는 것은 temp라는 변수명을 자주 사용합니다.

    // 2. 이미 담겼는지 확인하기
    const temp = baskets.filter((basketEl: any) => basketEl._id === el._id);

    // 담은 경우 1, 담지 않은 경우 0
    if (temp.length === 1) {
      alert("이미 담으신 물품입니다.");
      // 함수를 사용할때에는 break를 안쓰고 return을 사용합니다.
      return;
    }

    // 이미 담은 id를 빼는 방법으로 응용을 할 수 있습니다.

    // 3. 장바구니에 담기
    const { __typename, ...newEl } = el;
    baskets.push(newEl);
    localStorage.setItem("baskets", JSON.stringify(baskets));
  };

  return (
    <div>
      {data?.fetchBoards.map((el: IBoard) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
          <button onClick={onClickBasket(el)}>장바구니담기</button>
        </MyRow>
      ))}
    </div>
  );
}
