import React from 'react';

const Feedbacks = ({ good, neutral, bad, total, positive }) => (
  <div className='Data__Feedbacks'>
    <p>Good: </p>
    <p>Neutral: </p>
    <p>Bad: </p>
    <p>Total: </p>
    <p>Positive: </p>
  </div>
);

export default Feedbacks;
