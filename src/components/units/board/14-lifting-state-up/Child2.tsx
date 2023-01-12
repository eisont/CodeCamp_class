interface IProps {
  count: number;
  onClickCountUp: () => void;
}

const Child2 = (props: IProps) => {
  return (
    <div>
      <div>자식2의 카운트:{props.count}</div>
      <button onClick={props.onClickCountUp}>카운트 올리기!!!</button>
    </div>
  );
};

export default Child2;
