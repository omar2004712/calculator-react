import React from 'react';

export default function Operation(props) {
  return (
    <select id={props.id} onChange={props.onChange}>
      <option value="add">+</option>
      <option value="subtract">-</option>
      <option value="multiply">x</option>
      <option value="divide">/</option>
    </select>
  );
}
