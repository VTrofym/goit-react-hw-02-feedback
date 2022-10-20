import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  countPositiveFeedbackPercentage,
}) => {
  return (
    <div>
      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p> Total: {countTotalFeedback()}</p>
      <p style={{ color: 'red' }}>
        Positive feedback:
        {countPositiveFeedbackPercentage() || 0}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  // countTotalFeedback: PropTypes.number.isRequired,
  // countPositiveFeedbackPercentage: PropTypes.number.isRequired,
};

export default Statistics;

