import { memo } from 'react';

// 주의사항!!!
// memo해놓고 props에서 변경된 값을 받을 경우 리렌더링이 될텐데 모든 곳에 사용하면 되는거 아니야?
// 어딘가에 값을 저장해놓기도 이 페이지를 체크하면서 렌더링할지 안할지 결정하는 것이기 때문에 아무곳에나 남용할 경우 퍼포먼스가 더 떨어질 수 있습니다.

interface IProps {
  countState: number;
}

// props로 받는 값이 변경 될 경우 리렌더링이 됩니다. props 데이터를 사용하지 않아도 넘어오는 값이 바뀔 경우 리렌더링이 됩니다.
const MemeizationPresenterPage = (props: IProps) => {
  console.log('프리젠터가 렌더링 됩니다.');

  return (
    <div>
      <div>================================</div>
      <div>이것은 프리젠터 입니다.</div>
      <div>================================</div>
    </div>
  );
};

// 이렇게 memo로 감싸주면 렌더링을 최소화시켜 줄 수 있습니다.
export default memo(MemeizationPresenterPage);
