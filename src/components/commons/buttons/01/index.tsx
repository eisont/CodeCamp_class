import styled from '@emotion/styled';

const Button = styled.button`
  background-color: ${(props: IProps) => (props.isActive ? 'yellow' : '')};
`;

interface IProps {
  isActive?: boolean;
  title?: string;
}

const Button01 = (props: IProps) => {
  return <Button isActive={props.isActive}>{props.title}</Button>;
};

export default Button01;
