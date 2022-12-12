import { gql, useMutation, useQuery } from "@apollo/client";

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

const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function ApolloCacheStatePage() {
  const [deleteBoard] = useMutation(DELETE_BOARD);
  const [createBoard] = useMutation(CREATE_BOARD);
  const { data } = useQuery(FETCH_BOARDS);

  const onClickDelete = (boardId: string) => async () => {
    // async는 가장 가까운 괄호에 붙여줍니다.
    // 삭제하기로직
    await deleteBoard({
      variables: { boardId },
      update(cache, { data }) {
        // 직접 globalstate를 업데이트 해줍니다.
        // delete하고 return 된 값
        const deleteId = data.deleteBoard;
        // 삭제된 id
        // cache를 직접 수정하겠습니다.
        cache.modify({
          // globalState에 저장된 data를 가지고 와야합니다. 근데 어떤것을?
          // 그것을 fields를 사용해서 가지고 옵니다.
          fields: {
            fetchBoards: (prev, { readField }) => {
              const filteredPrev = prev.filter(
                (el: any) => readField("_id", el) !== deleteId // el._id가 안되므로, readField에서 꺼내오기
              );
              return [...filteredPrev];
            },
          },
        });
      },
    });
  };

  const onClickSubmit = async () => {
    // 등록하기로직
    await createBoard({
      variables: {
        createBoardInput: {
          writer: "영희",
          password: "1234",
          title: "제목입니다~",
          contents: "내용입니다@@@",
        },
      },
      // update(cache, useQuery 결과){}
      update(cache, { data }) {
        // create하고 return 된 값
        cache.modify({
          fields: {
            fetchBoards: (prev) => {
              // prev는 기존에 있는 10개를 의미합니다.
              // 지금 등록한 글과 나머지 글들
              return [data.createBoard, ...prev];
            },
          },
        });
      },
    });
  };

  return (
    <div>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id}>
          <span>{el.writer}</span>
          <span>{el.title}</span>
          <span>{el.contents}</span>
          <button onClick={onClickDelete(el._id)}>삭제하기</button>
        </div>
      ))}
      <button onClick={onClickSubmit}>등록하기</button>
    </div>
  );
}

// 예시
// 1. 구조분해 할당으로 함수 파라미터 받기
// function onClickAAA({ name, age, school }){
//   console.log(name)
// }

// const child = {
//   name: "철수",
//   age: 13,
//   school: "다람쥐초등학교"
// }
// onClickAAA(child)

// name = "철수"
// age = 13
// school = "다람쥐초등학교"
// onClickAAA({
//   name: "철수",
//   age: 13,
//   school: "다람쥐초등학교"
// })
// const name = "철수"
// const age = 13
// const school = "다람쥐초등학교"
// onClickAAA({
//   name: name,
//   age: age,
//   school: school
// })
// 위와 밑은 동일한 코드
// const name = "철수"
// const age = 13
// const school = "다람쥐초등학교"
// onClickAAA({name,age,school})
// ==========================================
// 2. 안좋은 옛날 방식
// function onClickAAA(name, age, school){
//   console.log(name)
// }

// const name: "철수"
// const age: 13
// const school: "다람쥐초등학교"
// onClickAAA(name, school)
// 이렇게 하면 순서가 매우 중요하기 때문에 좋지 않은 방법입니다.
