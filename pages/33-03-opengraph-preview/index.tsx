import axios from "axios";

export default function OpenGraphPreviewPage() {
  const onClickOpenGraph = async () => {
    const result = await axios.get("https://www.gmarket.co.kr"); // await를 안하고 data를 받아오려고 하면 data가 없다고 합니다. 그러니 정보를 다 받고 보여줘라는 코드인 async/await를 사용해서 값을 보내줍니다.
    // console.log(result.data);
    // console.log(result.data.split("<meta")); // og 태그를 보려고 알아보는 과정
    // console.log(      result.data.split("<meta").filter((el: any) => el.includes("og:"))); // 뭘 포함(og:)하고 있는지 확인하는 과정
    console.log(
      result.data.split("<meta").filter((el: any) => el.includes("og:title"))
    ); // og:title 찾기
  };

  return (
    <>
      <h1>사이트 미리보기 연습!!!</h1>
      <button onClick={onClickOpenGraph}>미리보기 실행</button>
    </>
  );
}
