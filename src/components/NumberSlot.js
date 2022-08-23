import './style/NumberSlot.css';
import React from 'react';

// export default function NumberSlot(props) {
//   return <div>{props}</div>;
// }

// eslint-disable-next-line react/prefer-stateless-function
class NumberSlot extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { value: this.props.defaultValue, width: '1ch' };

  onInput = (e) => {
    const number = String(parseFloat(e.target.value || 0));
    this.setState({ width: `${number.length}ch` });
  };

  // eslint-disable-next-line react/no-arrow-function-lifecycle
  render = () => (
    <div>
      <input
        style={{ width: this.state.width }}
        onInput={this.onInput}
        className="number-input"
        id={this.props.id}
        value={this.state.value || 0}
        onChange={(e) => {
          this.setState({ value: Number(e.target.value || 0) });
          this.props.onChange(e);
        }}
      />
    </div>
  );
}

export default NumberSlot;
