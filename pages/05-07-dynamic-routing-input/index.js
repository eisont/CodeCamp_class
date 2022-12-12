// import axios from 'axios'
import { useMutation, gql } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'


const CREATE_BOARD = gql`
    mutation createBoard($writer: String, $title: String, $contents: String){
        createBoard(writer: $writer, title: $title, contents: $contents) {
            _id
            number
            message
        }
    }
`

export default function GraphqlMutationPage (){
    const router = useRouter()

    const [mywriter, setMyWriter] = useState("")
    const [mytitle, setMyTitle] = useState("")
    const [mycontents, setMyContents] = useState("")

    const [callApi] = useMutation(CREATE_BOARD)


    const callGraphqlApi = async () => {

        try {
            const result = await callApi({
                variables: {writer: mywriter, title: mytitle, contents: mycontents}
            })
    
            console.log(result.data.createBoard.message)
            alert("게시물 등록에 성공했어요!")
            alert("상세 페이지로 이동해 볼까요?!")
            router.push(`/05-08-dynamic-routed-input/${result.data.createBoard.number}`)
        // `` 템플릿 리터럴
    
        // const banana = 3
        // const apple = 2
    
        // "철수는 바나나를 " + banana + "개 가지고 있고, " + "사과를 "+ apple + "개 가지고 있습니다."
        // `철수는 바나나를 ${banana}개 가지고 있고, 사과를 ${apple}개 가지고 있습니다.`
        
        } catch(error){
            alert(error.message)
        } finally {
            // 실패든 성공이든 실행하는 코드
        }

    }


    const onChangeWriter = (event) => {setMyWriter(event.target.value)}
    const onChangeTitle = (event) => {setMyTitle(event.target.value)}
    const onChangeContents = (event) => {setMyContents(event.target.value)}

    return (
        <>
            {/* <div>{data}</div> */}
            작성자: <input type="text" onChange={onChangeWriter} /><br />
            제목: <input type="text" onChange={onChangeTitle} /><br />
            내용: <input type="text" onChange={onChangeContents} /><br />
            <button onClick={callGraphqlApi}>GRAPHQL-API 요청하기!!!</button>
        </>
    )

}