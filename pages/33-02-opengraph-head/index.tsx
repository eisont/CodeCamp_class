import Head from "next/head";

export default function OpenGraphPage() {
  return (
    <>
      <Head>
        {/* meta === 내 사이트를 알릴때 사용하는 태그입니다. */}
        {/* content = 내 사이트 설명 */}
        {/* og = opengraph */}
        {/* 제공해주는 입장, 다른 프로그램을 사용할때 어떤것을 보여주게 할것인가? 하는 부분 */}
        <meta property="og:title" content="나만의 사이트" />
        <meta
          property="og:description"
          content="나만의 사이트에 오신것을 환영합니다."
        />
        <meta
          property="og:img"
          content="https://s.pstatic.net/static/www/mobile/edit/2016/0705/mobile_212852414260.png"
        />
      </Head>
      <h1>오픈그래프 연습 페이지</h1>
    </>
  );
}
