import styled from "@emotion/styled";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = styled.input``;

interface IProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input01(props: IProps) {
  // 보통 우리가 실수하는 부분이 부모 컴포넌트에는 type을 지정하고 자식 컴포넌트에는 type을 안 넣는 실수를 한다.
  return <Input type={props.type} {...props.register} />;
}
