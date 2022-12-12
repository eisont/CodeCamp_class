import BoardComponent from "../../src/components/units/board/08-board-component/BoardComponent";

export default function BoardNewPage(){
    return <BoardComponent isEdit={false}/>
}
// 넘기기 위해서는 props 를 사용하빈다.
// 넘길때는 is___를 사용해서 네이밍합니다.