// import axios from 'axios'
import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents){
        _id
        number
        message
    }
}
`

export default function GraphqlMutationPage (){
    const [data, setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)

    const callGraphqlApi = async () => {
        // const result = await axios.get("https://koreanjson.com/posts/1")  // rest-api 방식
        
        const result = await callApi({
            variables: { writer: "huni", title: "daily", contents: "내용이예요!!!" }
            // 위 데이터에 전송해서 출력하겠습니다.
        }) // graphql-api 방식
        // console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
    }


    return (
        <>
            <div>{data}</div>
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
        </>
    )

}