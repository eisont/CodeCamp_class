import { Component } from 'react';

interface IState {
  count: number;
}

export default class CounterPage extends Component {
  // Component 에서 제공하는 기능
  state = {
    count: 0,
  };

  onClickCounter = () => {
    // console.log("카운터 클릭!!!");
    console.log(this.state.count);
    this.setState((prev: IState) => ({
      count: prev.count + 1,
    }));
  };

  // Component 에서 제공하는 기능
  render() {
    return (
      <div>
        <div>현재 카운트: {this.state.count}</div>
        <button onClick={this.onClickCounter}>카운트 올리기!!!</button>
      </div>
    );
  }
}
