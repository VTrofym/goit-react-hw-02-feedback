import React, { Component } from 'react';

import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import TodoList from './TodoList/TodoList';

import colorPicker from './dataJson/colorPicker.json'
import initialTodos from './dataJson/todos.json';

const colorPickerOptions = colorPicker;

class App extends Component {
  state = {
    todos: initialTodos,
  };
  render() {
    const { todos } = this.state;
    return (
      <>
        <Counter initialValue={10} />
        <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <TodoList todos={todos} />
      </>
    );
  }
}

export default App;
