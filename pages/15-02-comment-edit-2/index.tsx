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
  // justify-contents: space-between;
`;
const MyColumn = styled.div`
  width: 25%;
`;

const MapBoardPage = () => {
  const { data } = useQuery(FETCH_BOARDS);
  const [myIndex, setMyIndex] = useState([false, false, false, false, false, false, false, false, false]);

  const onClickEdit = (event: any) => {
    const aaa = myIndex;
    aaa[event.target.id] = true;
    console.log(aaa);
    setMyIndex([...aaa]);
  };
  return (
    <>
      {data?.fetchBoards.map((el: any, index: any) => (
        <div key={el._id}>
          {myIndex[index] === false && (
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
          {myIndex[index] === true && <div>수정하기화면입니다.</div>}
        </div>
      ))}
    </>
  );
};

export default MapBoardPage;
