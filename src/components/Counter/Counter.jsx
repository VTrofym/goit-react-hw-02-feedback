import React from "react";
import Controls from "./Controls/Controls";

class Counter extends React.Component {
  // static defuultProps = {
  //   initialValue: 0,
  // };

  // static propTypes = {

  // }
  
  // state обязательное название
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
      <div className="Counter">
        <span className="Counter__value">{this.state.value}</span>
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
        <h2>Statistics</h2>
      </div>
    );
  }
};

export default Counter;

// handleIncrement = event => {
//     console.log('клик в увеличить')

//     const target = event.target; // нужна локальная переменная если асинхрон

//     setTimeout(() => {
//       console.log(target)
//     }, 1000)
//   };