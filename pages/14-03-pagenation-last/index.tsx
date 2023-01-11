import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import { useState } from 'react';

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

const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

const MyRow = styled.div`
  display: flex;
`;
const MyColumn = styled.div`
  width: 25%;
`;

const MapBoardPage = () => {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  console.log('data', data);
  const { data: dataBoardsCount } = useQuery(FETCH_BOARDS_COUNT);
  const lastPage = Math.ceil(dataBoardsCount?.fetchBoardsCount / 10);

  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    refetch({ page: startPage - 10 });
  };
  const onClickNextPage = () => {
    if (!(startPage + 10 <= lastPage)) return;
    setStartPage((prev) => prev + 10);
    refetch({ page: startPage + 10 });
  };

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <MyRow key={el._id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      <span onClick={onClickPrevPage}>이전 페이지</span>
      {new Array(10).fill(1).map(
        (_, index) =>
          index + startPage <= lastPage && (
            <span key={index + startPage} onClick={onClickPage} id={String(index + startPage)}>
              {index + startPage}
            </span>
          )
      )}
      {/* 이렇게 삼항연산자를 사용할 수 있습니다. 하지만 너무 길어지는게 단점이니 별로 권장은 안합니다. 
      {new Array(10).fill(1).map((_, index) =>
        index + startPage <= lastPage ? (
          <span key={index + startPage} onClick={onClickPage} id={String(index + startPage)}>
            {index + startPage}
          </span>
        ) : (
          <></>
        )
      )} */}
      <span onClick={onClickNextPage}>다음 페이지</span>
    </>
  );
};

export default MapBoardPage;
