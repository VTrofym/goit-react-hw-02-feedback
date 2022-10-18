import React, {Component} from 'react';

class Dropdown extends Component {
  state = {
    visible: false,
  };

  toggle = () => {
    this.setState(prevState => ({
      visible: !prevState.visible,
    }))
  };

  render() {
    return (
      <div className="Dropdown">
        <button
          type='button'
          className='Dropdown__toggle'
          onClick={this.toggle}
        >
          {this.state.visible ? 'Скрыть':'Показать'}
        </button>

        {this.state.visible && (
          <div className='Dropdown__menu'>Выпадающее меню</div>
        )}
      </div>
    )
  };
};

export default Dropdown;


// дял выпадающего окна
  // show = () => {
  //   this.setState({
  //     visible: true,
  //   });
  // };

  // hide = () => {
  //   this.setState({
  //     visible: false,
  //   });
  // };