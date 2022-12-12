import {useRouter} from "next/router"

export default function StaticRoutingPage(){
    const router = useRouter()

    const onClickMove = () => {
        router.push("/05-02-static-routed")
        // router.push("localhost:3000") 주소가 기본값으로 들어가 있습니다.

    }

    return (
        <button onClick={onClickMove}>페이지 이동하기!!!</button>
        // onClick 에 함수 적용하는 것 === 바인딩
    )
}