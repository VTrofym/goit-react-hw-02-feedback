import React, { Component } from 'react';
import Counter from './Counter/Counter';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  render() {
    
    return (
      <>
        
        <Counter initialValue={0} />
        
      </>
    );
  }
}

export default App;
