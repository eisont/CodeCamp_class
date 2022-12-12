// 에디터는 서버에서 필요가 없네요??? 서버에서 실행될 이유가 없다!!!
// reactquill 을 사용하겠습니다.=== import ReactQuill from "react-quill";
// 프론트 서버에서 document를 찾지 못하고 있습니다. 프리렌더링 도중에 document를 찾지 못하고 있어요.
import "react-quill/dist/quill.snow.css";
// 동적 임포트
// 우리는 react+next.js를 사용하고 있습니다. 우리는 next 기반 react를 사용하고 있어 프리렌더링이 작동합니다. 순수 react를 사용한다면 프리렌더링은 작동하지 않습니다. 현재 최신 react는 서버사이트렌더링을 지원한다고 하는데 아직은 테스트 단계입니다.
// 그래서 우리는 이걸 해결하기 위해서 dynamic을 사용합니다.
import dynamic from "next/dynamic";

// 임포트할 것을 인수로 집어넣습니다. 함수를 적어주세요. , {} === 옵션 ssr=== 서버사이드에서도 렌더링할 것인지? 서버에서 그릴꺼야?
// 클라이언트 사이드에서만 렌더링하겠습니다. === 브라우저
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
// dynamic으로 react-quill을 부르겠습니다.

export default function WebEditorPage() {
  const onChangeContents = (value: string) => {
    console.log(value);
  };
  return (
    <>
      작성자: <input type="text" />
      <br />
      비밀번호: <input type="password" />
      <br />
      제목: <input type="text" />
      <br />
      내용: <ReactQuill onChange={onChangeContents} />
      <br />
      <button>등록하기</button>
    </>
  );
}
