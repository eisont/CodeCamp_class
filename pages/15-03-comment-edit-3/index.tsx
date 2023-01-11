import { useQuery, gql } from '@apollo/client';
import BoardCommentItem from '../../src/components/units/board/15-board-comment';

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

const MapBoardPage = () => {
  const { data } = useQuery(FETCH_BOARDS);
  return (
    <>
      {data?.fetchBoards.map((el: any, index: any) => (
        <BoardCommentItem key={el._id} el={el} />
      ))}
    </>
  );
};

export default MapBoardPage;
