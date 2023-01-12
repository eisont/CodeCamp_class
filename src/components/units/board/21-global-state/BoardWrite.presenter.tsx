import { useRecoilState } from 'recoil';
import { isEditState } from '../../../../commons/store';

const GlobalStatePresenter = () => {
  const [isEdit] = useRecoilState(isEditState);

  return <div>{isEdit ? '수정하기' : '등록하기'}</div>;
};

export default GlobalStatePresenter;
