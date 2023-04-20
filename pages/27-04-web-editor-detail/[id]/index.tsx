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
      {/* data가 있을 수도 없을수도 있으니까 ?.을 작성해줍니다. === 옵셔널 체이닝 */}
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      {/* <div>내용: {data?.fetchBoard.contents}</div> */}

      {/* window가 아닐때 보여줘 === 브라우저일때 보여줘 */}
      {typeof window !== 'undefined' && (
        <div
          dangerouslySetInnerHTML={{
            __html: Dompurify.sanitize(data?.fetchBoard.contents),
            // Cross-Site-Script(=XSS) 해킹을 막기 위해 Dumpurify를 사용
            // Dompurify를 사용한 이유는 웹에디터를 사용해 js를 사용할 수 있는 것을 막는 역할
          }}
        />
      )}
    </>
  );
};

export default WebEditorDetailPage;
