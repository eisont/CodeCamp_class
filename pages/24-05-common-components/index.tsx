import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styled from "@emotion/styled";
import Input01 from "../../src/components/commons/inputs/01";
import Button01 from "../../src/components/commons/buttons/01";

const Error = styled.div`
  color: red;
  font-size: 13px;
`;

// 아래 schema는 컴포넌트 분리시 .validation.ts에 넣어놓으면 체계적으로 관리가 가능하다.
const schema = yup.object({
  email: yup
    .string() // xx은 문자열만 가능합니다. 이부분도 넣을수있다.
    .email("이메일 형식이 적합하지 않습니다.")
    .required("이메일은 필수 입력 사항입니다."),
  password: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상 입력해 주세요.")
    .max(15, "비밀번호는 최대 15자리로 입력해 주세요.")
    .required("비밀번호는 필수 입력 사항입니다."),
});

interface IFormValues {
  email?: string;
  password?: string;
}

export default function ReactHookFormPage() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });

  const onClickSubmit = (data: IFormValues) => {
    console.log(data);
  };

  // console.log("리렌더링 체크!!");

  return (
    <form onSubmit={handleSubmit(onClickSubmit)}>
      {/* 이메일 : <input type="text" {...register("email")} /> */}
      이메일 : <Input01 type="text" register={register("email")}></Input01>
      <Error style={{ color: "red" }}>{formState.errors.email?.message}</Error>
      {/* 비밀번호 : <input type="text" {...register("password")} /> */}
      비밀번호 :{" "}
      <Input01 type="password" register={register("password")}></Input01>
      <Error style={{ color: "red" }}>
        {formState.errors.password?.message}
      </Error>
      {/* <LoginButton isActive={formState.isValid}>로그인하기</LoginButton> */}
      <Button01 isActive={formState.isValid} title="로그인하기" />
    </form>
  );
}
