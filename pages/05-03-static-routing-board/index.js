import {useRouter} from "next/router"

export default function StaticRoutingPage(){
    const router = useRouter()

    const onClickMove1 = () => {
        router.push("/05-04-static-routed-board/83011")
    }
    const onClickMove2 = () => {
        router.push("/05-04-static-routed-board/83012")
    }
    const onClickMove3 = () => {
        router.push("/05-04-static-routed-board/83013")
    }

    return (
        <>
            <button onClick={onClickMove1}>1번 게시물로 이동하기!!!</button>
            {/*onClick 에 함수 적용하는 것 === 바인딩 */}
            <button onClick={onClickMove2}>2번 게시물로 이동하기!!!</button>
            <button onClick={onClickMove3}>3번 게시물로 이동하기!!!</button>
        </>
    )
}