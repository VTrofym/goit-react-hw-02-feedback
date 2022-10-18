import React, {Component} from 'react';
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
  state = {}
  render() {
    return (
<>
      <Counter initialValue={10} />
      <Dropdown />
        <ColorPicker options={colorPickerOptions} />
        <TodoList />
        </>
    );
  }
}

export default App;
