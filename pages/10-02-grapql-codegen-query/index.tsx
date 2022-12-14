import { useQuery, gql } from '@apollo/client';
import { IQuery, IQueryFetchBoardArgs } from '../../src/commons/types/generated/types';

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

const StaticRoutedPage = () => {
  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { number: 83011 }, // 여기 api는 freeboard가 아니라 example입니다. 그래서 type에 없다고 뜨는 겁니다.
  });

  console.log(data);

  return (
    <>
      <div>{data && data.fetchBoard?.number}번 게시물에 오신 것을 환영합니다.</div>
      <div>작성자: {data?.fetchBoard?.writer}</div>
      <div>제목: {data?.fetchBoard?.title}</div>
      <div>내용: {data?.fetchBoard?.contents}</div>
    </>
  );
};

export default StaticRoutedPage;
