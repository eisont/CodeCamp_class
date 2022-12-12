export default function BrowserStoragePage() {
  const onClickSaveCookie = () => {
    // cookies 저장하는 방법
    document.cookie = "aaa=철수";
    document.cookie = "zzz=맹구";
  };

  const onClickSaveLocal = () => {
    // local 저장하는 방법
    localStorage.setItem("bbb", "영희");
  };

  const onClickSaveSession = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onClickLoadCookie = () => {
    // cookies 꺼내오는 방법
    const myCookie = document.cookie
      .split("; ")
      .filter((el) => el.startsWith("aaa="))[0]
      .replace("aaa=", "");
    console.log(myCookie);
  };

  const onClickLoadLocal = () => {
    // local 꺼내오는 방법
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };

  const onClickLoadSession = () => {
    // session 꺼내오는 방법
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };

  return (
    <div>
      {/* 저장 버튼, 조회버튼 */}
      <button onClick={onClickSaveCookie}>쿠키 저장</button>
      <button onClick={onClickSaveLocal}>로컬 저장</button>
      <button onClick={onClickSaveSession}>세션 저장</button>
      =============================
      <button onClick={onClickLoadCookie}>쿠키 조회</button>
      <button onClick={onClickLoadLocal}>로컬 조회</button>
      <button onClick={onClickLoadSession}>세션 조회</button>
    </div>
  );
}
