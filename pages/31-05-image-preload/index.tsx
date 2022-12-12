import { useEffect, useRef, useState } from "react";

export default function ImagePreloadPage() {
  const [imgTag, setImgTag] = useState<HTMLImageElement>();
  // imgTag === <img src=""/>가 들어있습니다.
  const divRef = useRef<HTMLDivElement>(null); // document.getElementById를 사용하기 보다는 useRef를 많이 사용합니다.
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // 들어오자마자 이미지를 다운로드하고 있습니다.
    const img = new Image(); // 자동으로 ~~~ 해주는 객체입니다.
    img.src =
      "https://pixabay.com/get/g38c8d00a4dcd6230c798d612f69eb660cf5f3d4ea97aa84137d9a0446293c973e533fd1dad078670288462eb268fb802.jpg"; // img === img 태그입니다.
    // src 그냥 태그입니다.
    img.onload = () => {
      setImgTag(img);
    };
  });

  const onClickPreload = () => {
    // 다운로드하는데 굉장히 시간이 많이 걸린다? 그럼 preload를 사용해서 속도를 높이면 됩니다. 그럼 좋은 환경을 만들어줍니다.
    if (imgTag) divRef.current?.appendChild(imgTag); // if === imgTag가 없다면 어떻게 할건데 라는 조건
    // document.getElementById("aaa")?.appendChild(imgTag)
  };
  const onClickLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {/* <div id= "aaa"> */}
      <div ref={divRef}></div>
      <button onClick={onClickPreload}>이미지 프리로드</button>
      ===========================================================
      {isLoaded && (
        <img src="https://pixabay.com/get/g38c8d00a4dcd6230c798d612f69eb660cf5f3d4ea97aa84137d9a0446293c973e533fd1dad078670288462eb268fb802.jpg" />
      )}
      <button onClick={onClickLoad}>이미지 일반로드</button>
    </>
  );
}
