import {useRouter} from "next/router"

export default function StaticRoutingPage(){
    const router = useRouter()

    const onClickMove1 = () => {
        router.push("/05-06-dynamic-routed-board/83")
    }
    const onClickMove2 = () => {
        router.push("/05-06-dynamic-routed-board/1212")
    }
    const onClickMove3 = () => {
        router.push("/05-06-dynamic-routed-board/83013")
    }

    return (
        <>
            <button onClick={onClickMove1}>83번 게시물로 이동하기!!!</button>
            {/*onClick 에 함수 적용하는 것 === 바인딩 */}
            <button onClick={onClickMove2}>1212번 게시물로 이동하기!!!</button>
            <button onClick={onClickMove3}>83013번 게시물로 이동하기!!!</button>
        </>
    )
}