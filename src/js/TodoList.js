import React from 'react';

class TodoList extends React.Component {

  displayTask(task, key) {
    return (<li key={key}>{task}</li>);
  }

  render() {
    return (
      <ul>
        {this.props.tasks.map((value, key) => this.displayTask(value, key))}
      </ul>
    );
  }
}

export default TodoList;
