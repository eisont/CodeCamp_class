export default function CounterDoumentPage() {

    // 카운트 올리기 버튼을 누를때 작동 함수
    function counter(){
        const result = Number(document.getElementById("count").innerText) + 1
        document.getElementById("count").innerText = result
    }


    return (
        <div>
        {/* <></> === fragment 라고 불립니다. */}
            <div id="count">0</div>
            <button onClick={counter}>카운트 올리기!!!</button>
        </div>
    )
}