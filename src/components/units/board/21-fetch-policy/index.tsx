import { gql, useQuery } from '@apollo/client';

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

interface IEL {
  _id: string;
  title: string;
}

const FetchPolicyTest = () => {
  const { data } = useQuery(FETCH_BOARDS);
  // 내용을 변경하고 싶은 경우 밑에 코드처럼 추가하면 됩니다.
  // const { data } = useQuery(FETCH_BOARDS, {
  //   fetchPolicy:"cache-first"
  // });

  return (
    <div>
      {data?.fetchBoards?.map((el: IEL) => (
        <div key={el._id}>{el.title}</div>
      ))}
    </div>
  );
};

export default FetchPolicyTest;
