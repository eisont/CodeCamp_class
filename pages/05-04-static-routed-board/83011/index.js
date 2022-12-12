import { gql } from "@apollo/client"
import { useQuery } from "@apollo/client"

const FETCH_BOARD = gql`
query fetchBoard($number: Int ) {
        fetchBoard(number: $number){
            number
            writer
            title
            contents
        }
    }
` 


export default function StaticRoutedPage(){
    const { data } = useQuery(FETCH_BOARD, {
        variables: { number: 83011 }
        // 요청되자마자 'number:83011'이 조회됩니다.
    })

    console.log(data)

    return (
        <>
            <div>{data && data.fetchBoard.number}번 게시물에 오신 것을 환영합니다.</div>
            {/* 데이터가 있으면 data.~~~을 실행해줘 */}
            {/* 근데 같은 글자를 생략하고 싶다. / Optional-Chaining */}
            <div>작성자: {data?.fetchBoard.writer}</div>
            {/* data && data.~~~ === data?. */}
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
        </>
    )
}