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
        variables: { number: 83013 }
        // 요청되자마자 'number:83011'이 조회됩니다.
    })

    console.log(data)

    return (
        <>
            <div>{data && data.fetchBoard.number}번 게시물에 오신 것을 환영합니다.</div>
            <div>작성자: {data?.fetchBoard.writer}</div>
            <div>제목: {data?.fetchBoard.title}</div>
            <div>내용: {data?.fetchBoard.contents}</div>
        </>
    )
}