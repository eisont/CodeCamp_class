import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

// reacthookform을 사용하겠습니다.
import { useForm } from "react-hook-form";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const { register, setValue, trigger } = useForm({
    // trigger === 방아쇠
    // mode가 onChange입니다. 값을 치자마자 에러메시지를 띄우기 위해 mode를 onChange로 바꿨습니다.
    mode: "onChange",
  });

  const onChangeContents = (value: string) => {
    // 만약 value가 ~~~ 이면 어떤 값으로 변경해줘
    // value <p><br></p> => ""

    // value가 이 값이면 나오게하고 아니면 value를 보여줘
    // contents라는 키안에 value를 넣어줘!!!
    // register로 등록하지 않고, 강제로 값을 넣어주는 기능!!!
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // ReactQuill를 입력하면 trigger을 통해 contents라는 키와 연결이 되어 ReactQuill를 onChange를 하면?이라고 연결이 됩니다.
    // onChange 되었는지 안되었는지 react-hook-form에 알려주는 기능!!!
    trigger("contents");
    console.log(value);
  };
  return (
    <>
      작성자: <input type="text" {...register("writer")} />
      <br />
      비밀번호: <input type="password" {...register("password")} />
      <br />
      제목: <input type="text" {...register("title")} />
      <br />
      {/* 우리가 아는 onChange가 아닙니다. ReactQull에서 만든 onChange입니다. */}
      내용1: <ReactQuill theme="snow" onChange={onChangeContents} />
      {/* 내용2: <ReactQuill theme="bubble" onChange={onChangeContents} /> */}
      <br />
      <button>등록하기</button>
    </>
  );
}
