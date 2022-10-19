import React from "react";
import Buttons from "./Buttons/Buttons";

class Counter extends React.Component {

  state = {
      value: this.props.initialValue,
    };

  handleIncrement = () => { 
    this.setState(prevState => {
      return {
        value: prevState.value + 1,
      };
    });
  };

  handleDecrement = () => {
    this.setState(prevState => {
      return {
        value: prevState.value - 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Please Leave feedback</h1>
        <span>{this.state.value}</span>
        <Buttons
          addGoodRewiews={this.handleIncrement}
          addBadReviews={this.handleDecrement}
          addNeutralReviews={this.handleDecrement}
        />
        <h2>Statistics</h2>
        <div>
          <span>Good: {this.state.value}</span>
          <span>Neutral: {this.state.value}</span>
          <span>Bad: {this.state.value}</span>
        </div>
      </div>
    );
  }
};

export default Counter;
