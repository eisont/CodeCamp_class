const HofPage = () => {
  // hoc === higherordercomponent, hof === higherorderfunction
  // 이건 class component 에서 많이 사용했습니다.
  // function component 에서는 customhooks로 대체해서 많이 사용합니다.
  // 이렇게도 작성이 가능합니다. 갯수와 순서를 주의하세요.
  // const onClickChild = (el) => () => => () => (event) => {}
  const onClickChild = (el: string) => (_: any) => {
    console.log(el);
  };

  return (
    <div>
      <h1>HOF 연습 페이지입니다!!!</h1>
      {['철수', '영희', '훈이'].map((el) => (
        // <div key={el} onClick={onClickChild(el)()()}>
        // <div onClick={} id={} event.target.id를 사용하기 보다는 hof를 사용합니다. 이유는 id가 중복되면 안되기 때문입니다.
        <div key={el} onClick={onClickChild(el)}>
          {el}
        </div>
      ))}
    </div>
  );
};

export default HofPage;
