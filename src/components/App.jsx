import React, { Component } from 'react';
import Counter from './Counter/Counter';
import Feedbacks from './Feedbacks/Feedbacks';


class App extends Component {
  state = {
    
  };

  render() {
    
    return (
      <>
        <h1>Please Leave feedback</h1>
        <Counter initialValue={10} />
        <div>
          <span>Общее количество: </span>
          <span>Количество выполненных:</span>
        </div>
        <Feedbacks/>
      </>
    );
  }
}

export default App;
