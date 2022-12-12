// 시간이 걸리는 것을 만들 때 promise를 사용했습니다.
// .then을 사용했습니다.
// axios도 promise로 만들어져 있구나~~~
// resolve를 하면 promise가 끝이 납니다.

export default function PromiseAllPage() {
  const onClickPromise = async () => {
    // 차이를 계산하는 방법이 다양합니다.
    // console.time()
    console.time("promise 시작!!!");

    // new Promise((resolve, reject) => {
    //   // promise는 오래 걸리는 작업입니다.
    //   // 큐로 빠지게 됩니다.
    //   // resolve가 실행이 되면 끝이 납니다.

    //   resolve("철수");
    // // }).then(aaa=> aaa) // aaa===철수
    // }).then(res=> res) // res===철수
    // const result1 = await new Promise((resolve, reject) => {
    //   // promise는 시간이 걸리는 작업인데 resolve가 걸릴 때까지 기다린다. 3초를 기다리는 게 아닙니다.
    //   setTimeout(() => {
    //     resolve("https://dog1.jpg");
    //   }, 3000); // 업로드 파일이 3초가 걸린다.
    // }); // 여기에도 then을 작성할 수 있습니다.
    const result1 = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("https://dog1.jpg");
      }, 3000);
    });
    console.log(result1);
    const result2 = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("https://dog2.jpg");
      }, 1000);
    });
    console.log(result2);
    const result3 = await new Promise((resolve) => {
      setTimeout(() => {
        resolve("https://dog3.jpg");
      }, 2000);
    });
    console.log(result3);
    console.timeEnd("promise 시작!!!");
  }; // 여기는 3초 + 2초 + 1초 === 6초가 걸립니다.

  const onClickPromiseAll = async () => {
    // 여기서는 await는 한번만 사용하면 됩니다.

    console.time("promise.all 시작!!!");

    // 1. 하나하나 확인하는 방법

    // result 에는 배열이 담깁니다.
    // const result = await Promise.all([
    //   // 모두 기다린 후 한번에 보여줍니다. 모두 받기 전까지는 넘어가지 않습니다. === 3초 걸립니다. 1, 2초는 미리 받고 기다립니다.
    //   // 여기에는 배열이 들어갑니다.
    //   // 동시에 실행하고 싶은 promise들을 여기에 넣어줘
    //   new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //       resolve("https://dog1.jpg");
    //     }, 3000); // 3초 후 받기
    //   }),
    //   new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve("https://dog2.jpg");
    //     }, 1000); // 1초 후 받기
    //   }),
    //   new Promise((resolve) => {
    //     setTimeout(() => {
    //       resolve("https://dog3.jpg");
    //     }, 2000); // 2초 후 받기
    //   }),
    // ]); // 이미지가 100개일때?는 어쩌냐? 그래서 이것보다 더 간단히 작성 가능하다.
    // console.log(result);
    // console.timeEnd("promise.all 시작!!!");

    // 2. 한방에 확인하는 방법

    const result = await Promise.all(
      [
        "https://mypetlife.co.kr/9989/kakaotalk_20180720_165306472/",
        "https://i.pinimg.com/474x/bb/28/fa/bb28fa50e9fdf4da4b154087c2f78fcb.jpg",
        "https://pds.joongang.co.kr/news/component/htmlphoto_mmdata/201901/20/28017477-0365-4a43-b546-008b603da621.jpg",
      ].map(
        (el) =>
          // 한 줄이라 return, {} 생략합니다.
          // {
          // return을 해야 원위치로 돌아갑니다.
          // return
          new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(el); // 하드코딩하는게 아니라 el 입력
            }, 3000);
            // }
          })
      )
    );
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickPromise}>Promise 연습하기!!!</button>
      <button onClick={onClickPromiseAll}>Promise All 연습하기!!!</button>
    </>
  );
}
