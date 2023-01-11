import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import { MouseEvent, useState } from 'react';

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
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

interface IMapBoardEl {
  _id: string;
  writer: string;
  title: string;
}

const MapBoardPage = () => {
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const [startPage, setStartPage] = useState(1); // 여기서 초깃값은 페이지의 기준점입니다.

  const onClickPage = (event: MouseEvent<HTMLElement>) => {
    if (event.target instanceof Element) refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    setStartPage((prev) => prev - 5);
  };
  const onClickNextPage = () => {
    setStartPage((prev) => prev + 5);
  };

  return (
    <>
      {data?.fetchBoards.map((el: IMapBoardEl) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      <span onClick={onClickPrevPage}>이전 페이지</span>
      {new Array(5).fill(1).map((_, index) => (
        <span key={index + startPage} onClick={onClickPage} id={String(index + startPage)}>
          {index + startPage}
        </span>
      ))}
      <span onClick={onClickNextPage}>다음 페이지</span>
    </>
  );
};

export default MapBoardPage;
