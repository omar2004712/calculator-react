import React from 'react';
import NumberSlot from './NumberSlot';

// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  // eslint-disable-next-line react/state-in-constructor, react/no-unused-state
  state = {
    number1: 0,
    number2: 0,
    result: 0,
    operation: 'add',
  };

  onEquationChange = (e) => {
    const update = { [e.target.id]: parseFloat(e.target.value) };

    this.setState(update, this.operate);
  };

  operate = () => {
    const { number1, number2, operation } = this.state;
    let result;

    switch (operation) {
      case 'subtract':
        result = number1 - number2;
        break;
      case 'multiply':
        result = number1 * number2;
        break;
      case 'divide':
        result = number1 / number2;
        break;
      default:
        result = number1 + number2;
        break;
    }

    this.setState({ result });
  };

  // eslint-disable-next-line react/no-arrow-function-lifecycle
  render = () => (
    <div>
      <div>{this.state.result}</div>
      <NumberSlot
        id="number1"
        defaultValue={0}
        onChange={this.onEquationChange}
      />
      <NumberSlot
        id="number2"
        defaultValue={0}
        onChange={this.onEquationChange}
      />
    </div>
  );
}

export default App;
