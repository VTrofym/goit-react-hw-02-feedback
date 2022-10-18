import React, { Component } from 'react';
import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
import ColorPicker from './ColorPicker/ColorPicker';
import TodoList from './TodoList/TodoList';

const colorPickerOptions = [
  { label: 'Red', color: 'Red' },
  { label: 'green', color: 'green' },
  { label: 'blue', color: 'blue' },
  { label: 'grey', color: 'grey' },
  { label: 'pink', color: 'pink' },
  { label: 'indigo', color: 'indigo' },
];

class App extends Component {
  state = {
    todos: [
      { id: 'id-1', text: 'Выучить основы React', completed: false },
      { id: 'id-2', text: 'Разобраться с React Router', completed: false },
      { id: 'id-3', text: 'Пережить Redux', completed: false },
    ],
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
