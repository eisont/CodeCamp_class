import { Component } from 'react';

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  // react에서 제공하는 Component에서 제공하는 기능, React가 없으면 클래스 컴포넌트는 존재할 수 없습니다.
  // Component를 달아줌으로써 컴포넌트 기능을 가진 class가 된 것입니다.

  // 이건 정해져있는 네이밍입니다.
  state = {
    count: 0,
  };

  onClickCounter = () => {
    // console.log("카운터 클릭!!!");
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      // setState도 Component에서 제공하는 것입니다. 우리가 이름을 바꿀 수 없습니다.
      count: prev.count + 1,
    }));
  };

  // Component 에서 제공하는 기능, render => 그림 그리기
  render() {
    return (
      // 이 부분이 그림 그려지는 부분입니다.
      <div>
        <div>현재 카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
      </div>
    );
  }
}
