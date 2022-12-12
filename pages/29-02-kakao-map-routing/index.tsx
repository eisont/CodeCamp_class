import { useRouter } from "next/router";
import Link from "next/link";

export default function KakaoMapPage() {
  const router = useRouter();

  const onClickMoveToMap = () => {
    router.push("/29-03-kakao-map-routed");
    // router.push === 싱글페이지 어플리케이션을 의미합니다. spa
    // 카카오에서 map을 받아와서 보여줘야 하는데 속도가 빨라서 보여주지 못하고 있습니다.
    // 하지만 a 태그를 사용하면 새로 다 받아오기 때문에 map이 그려집니다.
  };

  return (
    <>
      <button onClick={onClickMoveToMap}>맵으로 이동하기!!!</button>
      {/* Link === router.push와 동일한 기능을 합니다. 태그로 사용하는 것입니다. */}
      {/* router.push가 좋을까? link 태그가 더 좋을까? */}
      <Link href="/29-03-kakao-map-routed">
        <a>맵으로 이동하기!!!</a>
        {/* 여기서 a태그는 보여주기 식입니다. a태그처럼 보여줘~라는 의미? */}
        {/* a태그처럼 보여주는 이유 === 검색 봇이 a태그라고 인식을 해야 합니다. */}
        {/* 이유는 검색 봇이 검색할때 a태그를 읽어야 해요. */}
      </Link>
      {/* csr 으로 보여주고 싶으면 위 코드로 작성 */}

      {/* 실제 서버에서 다운해서 오는 기능 */}
      {/* <a href="/29-03-kaako-map-routed">맵으로 이동하기!!!</a> */}
    </>
  );
}
