import { Dispatch, SetStateAction } from 'react';

interface IProps {
  setCount: Dispatch<SetStateAction<number>>;
  count: number;
}

const Child1 = (props: IProps) => {
  // 방법 2
  const aaa = () => {
    props.setCount((prev: number) => prev + 1);
  };
  return (
    <div>
      <div>
        자식1의 카운트:{props.count} {}
      </div>
      <button onClick={aaa}>카운트 올리기!!!</button>
    </div>
  );
};

export default Child1;
