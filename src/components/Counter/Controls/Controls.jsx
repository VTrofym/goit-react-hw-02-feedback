import React from 'react';

const Controls = ({onIncrement, onDecrement}) => (
  <div className="Counter__controls">
    <button type="button" onClick={onIncrement}>Good</button>
    <button type="button" onClick={onDecrement}>Neutral</button>
    <button type="button" onClick={onDecrement}>Bad</button>
  </div>
);

export default Controls;
