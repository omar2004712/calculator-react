import React from 'react';

// export default function NumberSlot(props) {
//   return <div>{props}</div>;
// }

// eslint-disable-next-line react/prefer-stateless-function
class NumberSlot extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { value: this.props.defaultValue };

  // eslint-disable-next-line react/no-arrow-function-lifecycle
  render = () => (
    <div>
      <input
        id={this.props.id}
        value={this.state.value}
        onChange={this.props.onChange}
      />
    </div>
  );
}

export default NumberSlot;
