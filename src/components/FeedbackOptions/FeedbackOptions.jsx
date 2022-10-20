import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({setGood, setNeutral, setBad}) => {
  return (
    <div>
      <button onClick={setGood} type="button">
        Good
      </button>
      <button onClick={setNeutral} type="button">
        Neutral
      </button>
      <button onClick={setBad} type="button">
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  setGood: PropTypes.func.isRequired,
  setNeutral: PropTypes.func.isRequired,
  setBad: PropTypes.func.isRequired,
}

export default FeedbackOptions;
