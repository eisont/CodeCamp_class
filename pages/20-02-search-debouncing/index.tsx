import { useQuery, gql } from '@apollo/client';
import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import { IQuery, IQueryFetchBoardsArgs } from '../../src/commons/types/generated/types';
import _ from 'lodash';

const FETCH_BOARDS = gql`
  query fetchBoards($search: String, $page: Int) {
    fetchBoards(search: $search, page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const Wrapper = styled.div``;
const MyRow = styled.div`
  display: flex;
`;

const MyColumn = styled.div`
  width: 25%;
`;

const MapBoardPage = () => {
  // const [mysearch, setMySearch] = useState("");

  const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const getDeBounce = _.debounce((data) => {
    refetch({ search: data, page: 1 });
  }, 1000);

  const onChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    getDeBounce(event.target.value);
  };
  // const onClickSearch = () => {
  //   refetch({ search: mysearch, page: 1 });
  // };
  const onClickPage = (event: any) => {
    refetch({ page: Number(event.target.id) });
  };
  return (
    <Wrapper>
      검색어입력: <input type='text' onChange={onChangeSearch} />
      {/* <button onClick={onClickSearch}>검색하기</button> */}
      {data?.fetchBoards.map((el: any) => (
        <MyRow key={el.id}>
          <MyColumn>{el.writer}</MyColumn>
          <MyColumn>{el.title}</MyColumn>
        </MyRow>
      ))}
      {new Array(10).fill(1).map((_, index) => (
        <span key={index + 1} onClick={onClickPage} id={String(index + 1)}>
          {index + 1}
        </span>
      ))}
    </Wrapper>
  );
};

export default MapBoardPage;
