import styled from '@emotion/styled';

interface IProps {
  isActive: Boolean;
}

export const SubmitButton = styled.button`
  background-color: ${(props: IProps) => (props.isActive ? 'yellow' : 'none')};
`;
export const WriterInput = styled.input`
  border-color: green;
`;
