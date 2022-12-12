// 싸이월드 때!!!
// setTimeout(() => {
//   ControlTwoTone.log("안녕하세요!");
// }, 1000);
// setInterval(() => {
//   document.getElementById("timer")?.innerText = "59:30";
// }, 1000);

export default function EventLoopPage() {
  const onClickTimer = () => {
    console.log("=========== Start!!! ===========");

    // 콜백함수라고 합니다. 29일차때 배울게요.
    setTimeout(() => {
      console.log("0초 뒤에 실행될 거예요!!!");
    }, 0);

    // 이게 실행 시간이 1초라면 위에 콜백함수가 1초후에 실행이 됩니다.
    // 만약 이게 15초가 걸린다면 15초 후에 콜백함수가 실행됩니다.
    // 이래서 setTimeout이 사기라고 합니다. ^^
    let sum = 0;
    for (let i = 0; i <= 900000000000; i += 1) {
      sum = sum + 1;
    }

    console.log("=========== End!!! ===========");
  };

  return (
    <>
      <button onClick={onClickTimer}>setTimeout 실행시키기</button>
    </>
  );
}
