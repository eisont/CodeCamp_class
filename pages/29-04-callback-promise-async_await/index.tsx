import axios from "axios";

export default function CallbackPromiseAsyncAwaitPage() {
  const onClickCaollback = () => {
    const aaa = new XMLHttpRequest();
    aaa.open("get", "http://numbersapi.com/random?min=1&max=200");

    aaa.send(); // 요청이 갑니다.
    // aaa.addEventListener("", callbackfunction() )

    aaa.addEventListener(
      "load",
      (res) => {
        // res === response
        console.log(res);
        const num = res.target.response.split(" ")[0]; // 131 (랜덤숫자)

        const bbb = new XMLHttpRequest();
        bbb.open("get", `https://koreanjson.com/${num}`);
        bbb.send(); // bbb가 다 들어오게 되면

        bbb.addEventListener("load", (res) => {
          const userId = res.target.response.UserId;

          const ccc = new XMLHttpRequest();
          ccc.open("get", `https://koreanjson.com/posts?userId=${userId}`);
          ccc.send();
          ccc.addEventListener("load", (res) => {
            console.log(res); // 최종 결과값!!!
          });
        });
      } // callback 함수입니다.
    ); // 응답이 왔을 때
  };

  // new Promise().then().catch()
  // promise를 설명할때 보통 .then이라고 설명합니다.
  //   new Promise((resolve, reject) => {
  //     // 외부에 요청을 할때?

  //     // 외부 요청 코드
  //     const ccc = new XMLHttpRequest();
  //     ccc.open("get", `https://koreanjson.com/posts?userId=${userId}`);
  //     ccc.send();
  //     ccc.addEventListener("load", (res) => {
  //       resolve(res); // 최종 결과값!!!
  //     });

  //     // 성공?
  //     resolve("철수");

  //     // 실패??
  //     reject("error message");
  //   })
  //     .then((res) => {})
  //     .catch((err) => {});
  // }

  const onClickPromise = () => {
    console.log("여기는 1번입니다.");
    axios
      .get("http://numbersapi.com/random?min=1&max=200")
      .then((res) => {
        console.log("여기는 2번입니다.");
        const num = res.data.split(" ")[0]; // 71(랜덤숫자)
        return axios.get(`http://koreanjson.com/posts/${num}`);
      })
      .then((res) => {
        console.log("여기는 3번입니다.");
        const userId = res.data.UserId;
        return axios.get(`http://koreanjson.com/posts?userId=${userId}`);
      })
      .then((res) => {
        console.log("여기는 4번입니다.");
        console.log(res);
      });
    console.log("여기는 5번입니다.");
  };

  const onClickAsynvAwait = async () => {
    // await 는 promise를 가지고 옵니다. promise를 기다리는게 await 입니다. promise 앞에 await 를 붙여줘야 합니다.
    const aaa = await axios.get("http://numbersapi.com/random?min=1&max=200");
    console.log(aaa);

    const bbb = await axios.get("http://numbersapi.com/random?min=1&max=200");
    console.log(bbb);

    const ccc = await axios.get("http://numbersapi.com/random?min=1&max=200");
    console.log(ccc);
  };

  return (
    <>
      <button onClick={onClickCaollback}>Callback 요청하기!!!</button>
      <button onClick={onClickPromise}>Promise 요청하기!!!</button>
      <button onClick={onClickAsynvAwait}>AsyncAwait 요청하기!!!</button>
    </>
  );
}
