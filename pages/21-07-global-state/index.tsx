import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { isEditState } from '../../src/commons/store';
import GlobalStateContainer from '../../src/components/units/board/21-global-state/BoardWrite.container';

const GlobalStatePage = () => {
  const [, setIsEdit] = useRecoilState(isEditState);

  useEffect(() => {
    setIsEdit(true);
  }, []);

  return <GlobalStateContainer />;
};

export default GlobalStatePage;
