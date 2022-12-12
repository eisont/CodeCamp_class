import { useMutation } from '@apollo/client'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { CREATE_BOARD } from './BoardWrite.queries'
import BoardWriteUI from './BoardWrite.presenter'

export default function BoardWrite() {
    const [isActive, setIsActive] = useState(false)

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
        
        } catch(error){
            alert(error.message)
        } finally {
        }

    }

    

    const onChangeWriter = (event) => {
        setMyWriter(event.target.value)
        if (event.target.value !== "" && mytitle !== "" && mycontents !== ""){
            setIsActive(true)
        }
    }
    const onChangeTitle = (event) => {
        setMyTitle(event.target.value)
        if (mywriter !== "" && event.target.value !== "" && mycontents !== ""){
            setIsActive(true)
        }
    }
    const onChangeContents = (event) => {
        setMyContents(event.target.value)
        if (mywriter !== "" && mytitle !== "" && event.target.value !== ""){
            setIsActive(true)
        }
    
    }

    return (
        <BoardWriteUI 
            onChangeWriter={onChangeWriter}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            callGraphqlApi={callGraphqlApi}
            isActive={isActive}
        />
    )

}
