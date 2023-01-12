// container 으로 넘기는 파일
import { ChangeEvent } from 'react';
import { SubmitButton, WriterInput } from './BoardWriter.styles';

interface IProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  callGraphqlApi: () => void;
  isActive: Boolean;
}

const BoardWriteUI = (props: IProps) => {
  return (
    <div>
      {/* <div>{data}</div> */}
      작성자: <WriterInput type='text' onChange={props.onChangeWriter} />
      <br />
      제목: <input type='text' onChange={props.onChangeTitle} />
      <br />
      내용: <input type='text' onChange={props.onChangeContents} />
      <br />
      <SubmitButton onClick={props.callGraphqlApi} isActive={props.isActive}>
        GRAPHQL-API 요청하기!!!
      </SubmitButton>
    </div>
  );
};

export default BoardWriteUI;
