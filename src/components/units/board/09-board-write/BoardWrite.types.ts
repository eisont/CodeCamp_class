// interface 모아 저장하는 파일
// 나중 큰 프로젝트 할때는 매우 튼튼한 프로젝트가 됩니다.

import { ChangeEvent } from "react";

// 컨테이너 타입
export interface IBoardWriteProps {
  isEdit: boolean;
  // data는 있을수도 있고 없을수도 있습니다.
  data?: any;
}

export interface IMyVariables {
  number: number;
  writer?: string;
  title?: string;
  contents?: string;
}

// 프리젠터 타입
export interface IBoardWriteUIProps {
  onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  callGraphqlApi: () => void;
  onClickUpdate: () => void;
  isActive: boolean;
  isEdit: boolean;
  data?: any;
  // 있을수도 있고 없을수도 있다!!!!
}

// 스타일 타입
export interface ISubmitButtonProps {
  isActive: boolean;
}
