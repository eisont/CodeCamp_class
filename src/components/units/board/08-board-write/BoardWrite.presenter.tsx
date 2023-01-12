// 여기는 프리젠트 컴포넌트

import { ChangeEvent } from 'react';
import { SubmitButton, WriterInput } from './BoardWriter.styles';

interface IProps {
  isEdit: Boolean;
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickUpdate: () => void;
  callGraphqlApi: () => void;
  isActive: Boolean;
}

const BoardWriteUI = (props: IProps) => {
  return (
    <div>
      {/* <div>{data}</div> */}
      <h1>{props.isEdit ? '수정' : '등록'}페이지</h1>
      작성자: <WriterInput type='text' onChange={props.onChangeWriter} />
      <br />
      제목: <input type='text' onChange={props.onChangeTitle} />
      <br />
      내용: <input type='text' onChange={props.onChangeContents} />
      <br />
      <SubmitButton onClick={props.isEdit ? props.onClickUpdate : props.callGraphqlApi} isActive={props.isActive}>
        {props.isEdit ? '수정' : '등록'}하기
      </SubmitButton>
    </div>
  );
};

export default BoardWriteUI;
