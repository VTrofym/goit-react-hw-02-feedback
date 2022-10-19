import React from 'react';

const Buttons = ({addGoodRewiews, addBadReviews, addNeutralReviews}) => (
  <div>
    <button type="button" onClick={addGoodRewiews}>Good</button>
    <button type="button" onClick={addBadReviews}>Neutral</button>
    <button type="button" onClick={addNeutralReviews}>Bad</button>
  </div>
);

export default Buttons;
