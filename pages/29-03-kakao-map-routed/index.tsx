// import Head from "next/head";
import { useEffect } from "react";
// Head에 집어넣게 되면 html head 부분에 들어가게 되고, 먼저 실행
// import Script from "next/script";
// Script 부분에 넣으면 html script 부분에 들어갑니다. body에 들어가서 나중에 실행

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMapPage() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script>
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=5c7f2a4ed139b34fb703d663cc6f45a2&autoload=false";
    // ? & === 쿼리스트링
    document.head.appendChild(script);

    // script가 로드가 되면?
    script.onload = () => {
      // .onload === ~라는 함수를 내가 다시 재정의한다!!!
      window.kakao.maps.load(function () {
        // map을 돌리고 실행할게요.
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          // window.kakao === window에서 kakao를 찾게끔 만들어줬습니다.
          center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        // 담지 않아도 되는데 map에 담은 이유는 나중에 map을 가지고 스타일 등등을 관리하기 위해 담아놓겠습니다.
        const map = new window.kakao.maps.Map(container, options); // 지도 생성 및 객체 리턴
      });
    };
  }, []);

  return (
    <>
      {/* <Head> 모든 페이지에서 카카오맵을 다운로드 받으므로 비효율적임
      <script
        type="text/javascript"
        src="//dapi.kakao.com/v2/maps/sdk.js?appkey=5c7f2a4ed139b34fb703d663cc6f45a2"
      ></script>
    </Head> */}
      <div id="map" style={{ width: 500, height: 400 }}></div>
    </>
  );
}

// js key === 5c7f2a4ed139b34fb703d663cc6f45a2
