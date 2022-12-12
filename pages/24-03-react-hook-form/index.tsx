import { useForm } from "react-hook-form";

interface IFormValues {
  writer?: string;
  title?: string;
  contents?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit } = useForm();
  // 우리가 값을 받아오기 위해 적은 onChange 등등 regester안에 들어가 있습니다.
  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  // console.log("리렌더링 체크!!");
  // 우리가 예전에 입력한 useState는 입력할때마다 리렌더가 됬습니다.
  // 지금은 비지오 컴포넌트 방식이기 때문에 계속 리렌더링이 되지 않아 빠릅니다.

  return (
    // 우리가 입력한 state의 값들을 handleSubmit.data로 집어넣어 줍니다.
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* ...regester("state 변수 이름") */}
      작성자 : <input type="text" {...register("mywriter")} />
      제목 : <input type="text" {...register("mytitle")} />
      내용 : <input type="text" {...register("mycontents")} />
      {/* 주소 : <input type="text" {...register("boardAddress.addressDetail")} /> */}
      <button>등록하기</button>
      {/* button type을 작성하지 않으면 기본값으로 submit이 적용이 됩니다. 그래서 밑에 버튼은 onSubmit, onClickLogin 두개의 함수가 실행이 됩니다. */}
      {/* <button onClick={onClickLogin}>등록하기</button> */}
      {/* <button type="reset">초기화하기</button> */}
      {/* <button type="submit">등록하기</button> */}
      {/* 반드시 type으로 button으로 지정해야 지정한 함수 하나만 실행이 됩니다. 
      <button type="button" onClick={`여기에 바인딩된 함수가 실행`}>나만의 버튼</button> */}
    </form>
  );
}
