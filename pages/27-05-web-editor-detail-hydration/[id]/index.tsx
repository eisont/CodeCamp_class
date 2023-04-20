import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import Dompurify from 'dompurify';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

const WebEditorDetailPage = () => {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.id },
  });
  console.log(data);

  return (
    <>
      <div style={{ color: 'red' }}>작성자: {data?.fetchBoard.writer}</div>
      <div style={{ color: 'green' }}>제목: {data?.fetchBoard.title}</div>

      {typeof window !== 'undefined' ? (
        <div
          style={{ color: 'blue' }}
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
          }}
        ></div>
      ) : (
        <div style={{ color: 'blue' }}></div>
        // hydration 이슈를 해결하기 위한 코드, 프리렌더링 때 코드
      )}
      <div style={{ color: 'brown' }}>상품가격: </div>
    </>
  );
};

export default WebEditorDetailPage;
