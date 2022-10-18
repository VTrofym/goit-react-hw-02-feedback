import React, { Component } from 'react';
import './ColorPicker.css';

class ColorPicker extends Component {
  state = {
    activeOptionInd: 0,
  };

  setActiveIndex = index => {
    this.setState({
      activeOptionInd: index,
    });
  }

  makeOptionClassName = index => {
    const optionClasses = ['ColorPicker__option'];

    if (index === this.state.activeOptionInd) {
      optionClasses.push('ColorPicker__option--active');
    }

    return optionClasses.join(' ')
  };

  render() {
    const { label } = this.props.options[this.state.activeOptionInd];
    return (
      <div className="ColorPicker">
        <h2 className="ColorPicker__title">Color Picker</h2>
        <p>выбран цвет: { label}</p>
        <div>
          {this.props.options.map(({ label, color }, index) => (
              <button
                type="button"
                key={label}
                className={this.makeOptionClassName(index)}
                style={{
                  backgroundColor: color,
                }}
              onClick={() => this.setActiveIndex(index)}
              ></button>
            )
          )}
        </div>
      </div>
    );
  }
}

export default ColorPicker;
