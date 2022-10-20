import React from 'react';
import PropTypes from 'prop-types';

const FeedbackOptions = ({allFeedback, feedback}) => {
  return (
    feedback.map(item => (
      <button type='buttton' key={item} onClick={() => allFeedback(item)}>{item}</button>
    ))
  );
};

FeedbackOptions.propTypes = {
  feedback: PropTypes.array.isRequired,
  allFeedback: PropTypes.func.isRequired,
}

export default FeedbackOptions;
