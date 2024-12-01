import React from 'react';

interface ClassCounterProps {
  initialValue?: number;
}

interface ClassCounterState {
  count: number;
}

class ClassCounter extends React.Component<
  ClassCounterProps,
  ClassCounterState
> {
  constructor(props: ClassCounterProps = { initialValue: 0 }) {
    super(props);

    this.state = { count: props.initialValue || 0 };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({
      count: this.state.count - 1 >= 0 ? this.state.count - 1 : 0,
    });
  }

  render() {
    return (
      <div className="counter">
        <h1>{this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default ClassCounter;
