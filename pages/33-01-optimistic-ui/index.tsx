import { useQuery, gql, useMutation } from "@apollo/client";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      likeCount
    }
  }
`;

const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export default function OptimisticUIPage() {
  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: "6269ecf7a8255b002988d65e" }, // 어떤 boardId인지 확인
  });
  console.log(data);

  const [likeBoard] = useMutation(LIKE_BOARD);

  const onClickOtimisticUI = () => {
    likeBoard({
      // likeBoard 함수 실행
      variables: { boardId: "6269ecf7a8255b002988d65e" }, // 이 아이디를 가진 게시글 like가 1 증가합니다.

      // 1. refetchQueries 방법 === response 두번한다.???
      // 이것은 db에서 받아오기 때문에 엄청 느립니다. (느린 3g로 확인 가능)
      // refetchQueries: [
      //   {
      //     query: FETCH_BOARD,
      //     variables: { boardId: "6269ecf7a8255b002988d65e" },
      //   },
      // ],

      // response를 두번 받는다.
      // 1. 가짜 데이터를 받고
      // 2. 진짜 db에 저장된 정보를 받고

      optimisticResponse: {
        // 실패 확룰이 적고 실패해도 큰 문제가 되지 않을 때 사용
        // aaa: 3
        likeBoard: (data?.fetchBoard.likeCount || 0) + 1, // 기존에 있던거 +1
      },

      // 2. cache를 조작하는 방법
      update(cache, { data }) {
        // data === data.likeBoard 우리가 흔히 아는 data

        // data.aaa  // optimisticResponse에 적은 aaa가 이렇게 들어옵니다.

        // cache를 직접 수정한다.
        cache.writeQuery({
          query: FETCH_BOARD, // FETCH_BOARD를 직접 바꿔치기한다. 조작한다.
          variables: { boardId: "6269ecf7a8255b002988d65e" },
          data: {
            fetchBoard: {
              // _id, __typename 필수 입력사항입니다. 적지 않으면 오류!!!!
              _id: "6269ecf7a8255b002988d65e",
              __typename: "Board",
              // likeCount: 10,   // likeCount 를 우리가 강제로 조작합니다. 예를 들어 7이였다면 이 코드를 작성해서 10으로 변경합니다.
              likeCount: data.likeBoard, // 하드코딩하지 않고 데이터를 받아서 연결합니다.
            },
          },
        });
      },
    });
  };

  return (
    <>
      <h1>옵티미시틱 UI</h1>
      <div>현재 카운트(좋아요): {data?.fetchBoard.likeCount}</div>
      <button onClick={onClickOtimisticUI}>좋아요 올리기!!!</button>
    </>
  );
}
