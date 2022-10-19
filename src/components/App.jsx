import React, { Component } from 'react';
import Marcup from './Marcup/Marcup';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  render() {
    
    return (
      <>
        
        <Marcup initialValue={0} />
        
      </>
    );
  }
}

export default App;
