import { gql, useQuery } from "@apollo/client";
import Head from "next/head";
import { useRouter } from "next/router";

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

export default function StaticRoutedPage() {
  const router = useRouter();
  console.log(router);

  Number(router.query.aaa);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.number) }, // Number(router.query.aaa) ===83013 //숫자로 바꾸기 위해 Number으로 감쌉니다.
    // 요청되자마자 'number:83011'이 조회됩니다.
  });

  console.log(data);

  return (
    <>
      <Head>
        {/* 정보를 받아서 보여주고 싶은데 빈 페이지가 보입니다. */}
        {/* 처음부터 보여주게 하고 싶다면 처음부터 data가 있어야 합니다. */}
        <meta property="og:title" content={data?.fetchBoard.title} />
        <meta property="og:description" content={data?.fetchBoard.contents} />
        <meta property="og:img" content={data?.fetchBoard.image} />
      </Head>
      <div>
        {data && data.fetchBoard.number}번 게시물에 오신 것을 환영합니다.
      </div>
      <div>작성자: {data?.fetchBoard.writer}</div>
      <div>제목: {data?.fetchBoard.title}</div>
      <div>내용: {data?.fetchBoard.contents}</div>
    </>
  );
}
