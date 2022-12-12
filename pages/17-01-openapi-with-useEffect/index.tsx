import axios from "axios";
import { useEffect, useState } from "react";

export default function OpenapiWithUseEffectPage() {
  const [dogUrl, setDogUrl] = useState("");

  useEffect(() => {
    const aaa = async () => {
      const result = await axios.get("https://dog.ceo/api/breeds/image/random");
      setDogUrl(result.data.message);
    };
    aaa();
  }, []);
  // 한번만 실행되고 마는 코드입니다.
  // async는 따로 함수를 만들어서 async를 사용합니다. 그 함수로 result를 감싸줍니다.

  return (
    <>
      <div>오픈 api 연습!!!</div>
      <img src={dogUrl} />
    </>
  );
}
