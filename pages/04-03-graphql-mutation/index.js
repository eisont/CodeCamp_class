// import axios from 'axios'
import { useMutation, gql } from '@apollo/client'
import { useState } from 'react'

// mutation 을 사용해서 CREATE_BOARD에 담습니다.
const CREATE_BOARD = gql`
    mutation{
        createBoard(writer: "huni", title: "daily", contents: "내용이예요!!!")
        {
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage (){
    const [data, setData] = useState("")
    const [callApi] = useMutation(CREATE_BOARD)
    // callApi === CREATE_BOARD

    const callGraphqlApi = async () => {

        const result = await callApi()
        
        console.log(result)
        console.log(result.data.createBoard.message)
        setData(result.data.createBoard.message)
    }


    return (
        <>
            <div>{data}</div>
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
        </>
    )

}