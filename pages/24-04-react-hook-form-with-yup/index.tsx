import { useForm } from "react-hook-form";
// 에러를 검증해주는 라이브러리
// yup은 독립적으로 사용이 가능한 라이브러리입니다. 그래서 이것을 formik과 같이 사용할지 reacthookform이랑 같이 쓸지 결정해서 사용 가능
// reacthookform과 yup을 같이 사용하고 싶을 때는 @hookform/resolvers을 설치해야 합니다.
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import Input01 from "../../src/components/commons/inputs/01";

const Error = styled.div`
  color: red;
  font-size: 13px;
`;

interface IProps {
  isActive: boolean;
}

const LoginButton = styled.button`
  background-color: ${(props: IProps) => (props.isActive ? "yellow" : "")};
`;

// 이 정보는 https://react-hook-form.com/get-started
// 우리가 작성했던 error 메세지 작성 부분
const schema = yup.object({
  email: yup
    .string() // xx은 문자열만 가능합니다. 이부분도 ()에 넣을수있다.
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."), // 입력하지 않은 경우 작동하는 것
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해 주세요.")
    .required("비밀번호는 필수 입력 사항입니다."), // 입력하지 않은 경우 작동하는 것
});

interface IFormValues {
  email?: string;
  password?: string;
}

export default function ReactHookFormPage() {
  // error 메시지는 formState에 담겨있습니다.
  const { register, handleSubmit, formState } = useForm({
    // reacthookform과 yup을 같이 사용하고 싶을 때는 yupResolver을 같이 사용하면 됩니다.
    resolver: yupResolver(schema), // 이 schema를 검증하겠습니다. yup과 연결했습니다.
    mode: "onChange", // onChange 되었을때 바로 실행해주세요.
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  console.log("리렌더링 체크!!");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      이메일 : <Input01 type="text" register={register("email")} />
      {/* error message가 담겨있는 formState에서 꺼내오겠습니다. 
      ?. === error 메시지가 있다면 보여줘!!!  */}
      <Error>{formState.errors.email?.message}</Error>
      비밀번호 : <Input01 type="password" register={register("password")} />
      <Error>{formState.errors.password?.message}</Error>
      {/* error가 없다면 formStateisValid 부분에 true, false로 들어옵니다.  */}
      <LoginButton isActive={formState.isValid}>로그인하기</LoginButton>
    </form>
  );
}
