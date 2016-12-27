import React from 'react';

class Counter extends React.Component {

  constructor() {
    super();

    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    this.state = {
      count: 0
    };
  }

  decrement() {
    let count = this.state.count - 1;
    count = (count < 0) ? 0 : count;
    this.setState({ count: count });
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h1>Count : {this.state.count}</h1>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.increment}>+1</button>
      </div>
    );
  }
}

export default Counter;
