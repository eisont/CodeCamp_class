import styled from '@emotion/styled';
import { useQuery, gql } from '@apollo/client';
import { useState } from 'react';

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

const MapBoardPage = () => {
  const { data } = useQuery(FETCH_BOARDS);
  const [myIndex, setMyIndex] = useState();

  const onClickEdit = (event: any) => {
    setMyIndex(event.target.id);
  };
  return (
    <>
      {data?.fetchBoards.map((el: any, index: any) => (
        <div key={el._id}>
          {index !== 2 && (
            <MyRow>
              <MyColumn>
                <input type='checkbox' />
              </MyColumn>
              <MyColumn>{el._id}</MyColumn>
              <MyColumn>{el.writer}</MyColumn>
              <MyColumn>{el.title}</MyColumn>
              <button id={index} onClick={onClickEdit}>
                수정
              </button>
            </MyRow>
          )}
          {index === Number(myIndex) && <div>수정하기화면입니다.</div>}
        </div>
      ))}
    </>
  );
};

export default MapBoardPage;
