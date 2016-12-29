import React from 'react';
import TodoList from './TodoList';

class TodoApp extends React.Component {

  constructor() {
    super();

    this.state = {
      items: [
        'Put tank in a mall',
        'Do laundry',
        'Buy groceries'
      ],
      task: ''
    }
  }

  handleAdd(event) {
    this.setState({
      items: this.state.items.concat([this.state.task]),
      task: ''
    });
  }

  handleChange(event) {
    this.setState({task: event.target.value})
  }

  render() {
    return (
      <div>
        <h1>My Tasks</h1>
        <TodoList tasks={this.state.items} />
        <input onChange={(event) => this.handleChange(event)} value={this.state.task} />
        <button onClick={(event) => this.handleAdd(event)}>Add Task</button>
      </div>
    );
  }
}

export default TodoApp;
