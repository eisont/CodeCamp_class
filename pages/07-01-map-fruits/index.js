const FRUITS = [
    { number: 1, title: "레드향" },   //<div> 1 레드향 </div>
    { number: 2, title: "샤인머스켓" },   //<div> 2 샤인머스켓 </div>
    { number: 3, title: "산청딸기" },
    { number: 4, title: "한라봉" },
    { number: 5, title: "사과" },
    { number: 6, title: "애플망고" },
    { number: 7, title: "딸기" },
    { number: 8, title: "천혜향" },
    { number: 9, title: "과일선물세트" },
    { number: 10, title: "귤" },
];
// 밖에 빼놓으면 새로 작성할 필요 없어서 재사용하기 편하다

export default function MapFruitsPage(){
    // const aaa = [<div>1 레드향</div>,<div>2 샤인머스캣</div>,<div>3 산청딸기</div>]

    // const bbb = ["나의레드향","나의샤인머스켓","나의산청딸기"].map((el)=>(<div>{el}</div>))
    // 배열을 감싸기 위해서는 map 사용합니다.

    // const ccc = FRUITS.map((el) => (<div>{el.number} {el.title}</div>))

    return (
        // <div>{ccc}</div>
        <div>
            {FRUITS.map((el) => (
            <   div>{el.number} {el.title}</div>
            ))}
            {/* 변수로 만들어서 작성하기 보다는 직관적인 코드로 작성합니다. 일일이 찾으러 다닐 필요가 없어서. */}
        </div>
    )
}