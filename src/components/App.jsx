import React, { Component } from 'react';

import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';
// import ColorPicker from './ColorPicker/ColorPicker';
import TodoList from './TodoList/TodoList';

// import colorPicker from './dataJson/colorPicker.json'
import initialTodos from './dataJson/todos.json';

// const colorPickerOptions = colorPicker;

class App extends Component {
  state = {
    todos: initialTodos,
  };

  deleteTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.complited ? total + 1 : total),
      0,
    );

    return (
      <>
        <Counter initialValue={10} />
        <Dropdown />
        {/* <ColorPicker options={colorPickerOptions} /> */}
        <div>
          <span>Общее количество: {totalTodoCount}</span>
          <span>Количество выполненных: { completedTodoCount}</span>
        </div>
        <TodoList todos={todos} onDeleteTodo={this.deleteTodo} />
      </>
    );
  }
}

export default App;
