import { useQuery, gql } from "@apollo/client";
import styled from "@emotion/styled";
import InfiniteScroll from "react-infinite-scroller";

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
  // justify-contents: space-between;
`;
const MyColumn = styled.div`
  width: 25%;
`;
const Wrapper = styled.div`
  width: 100%;
`;

export default function MapBoardPage() {
  const { data, fetchMore } = useQuery(FETCH_BOARDS);

  // 스크롤 시켰을때 함수 실행되는 곳에 작성
  const onLoadMore = () => {
    if (!data) return;

    // fetchMore === 추가적으로 fetch를 하겠다.
    fetchMore({
      // 다음 page를 추가로 fetch 해주세요. /10 페이지로 분해
      // Math.ceil === 소수점 올리기
      // (data.fetchBoards.length / 10) 현재 페이지
      // +1 === 다음페이지
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      // 다음 페이지를 fetch 하고 오면 기존에 있던 useQuery를 업데이트하게 해줍니다.
      updateQuery: (prev, { fetchMoreResult }) => {
        // prev === 이전 댓글들, 다음에 들어올 댓글 === fetchMoreResult
        if (!fetchMoreResult.fetchBoards)
          // 추가 댓글이 없다면 이전 댓글만 보여줘
          return { fetchBoards: [...prev.fetchBoards] };
        return {
          // return을 해야 업데이트가 됩니다.
          // 이전 댓글과 다음 댓글을 합쳐서 리턴하겠습니다.
          // 이렇게 하면 이전에 있던 useQuery를 업데이트해서 보여줍니다.
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult.fetchBoards],
        };
      },
    });
  };

  return (
    <Wrapper style={{ height: "700px", overflow: "auto" }}>
      <InfiniteScroll
        pageStart={0}
        loadMore={onLoadMore}
        hasMore={true}
        useWindow={false}
      >
        {data?.fetchBoards.map((el: any) => (
          <MyRow key={el._id}>
            <MyColumn>{el._id}</MyColumn>
            <MyColumn>{el.writer}</MyColumn>
            <MyColumn>{el.title}</MyColumn>
          </MyRow>
        )) || <div></div>}
      </InfiniteScroll>
    </Wrapper>
  );
}
